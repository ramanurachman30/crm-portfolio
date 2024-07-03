<?php

namespace App\Http\Controllers;

use App\Models\Contents;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ContentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        $contents = Contents::all();
        return Inertia::render('Contents/Index', ['contents' => $contents]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Contents/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'img' => 'required|image|mimes:jpeg,png,jpg'
        ]);

        $data = $request->except('img', 'contents');
        $data['img'] = $request->file('img')->store('contents', 'public');
        Contents::create($data);
        // dd($data);
        return redirect()->route('contents.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $data = Contents::find($id);
        // dd($data);
        return Inertia::render('Contents/Edit', ['contents' => $data]);
        // return Inertia::render('Contents/Edit', [
        //     'contents' => $contents
        // ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // dd($request->all());
        // Validasi data yang masuk
        $request->validate([
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'img' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $contents = Contents::findOrFail($id);

        $dataUpdates = [
            'name' => $request->name,
            'title' => $request->title,
            'description' => $request->description,
        ];

        // dd($dataUpdates);

        if ($request->hasFile('img')) {
            Storage::delete($contents->img);
            $img = $request->file('img')->store('contents', 'public');
            $dataUpdates['img'] = $img;
        }

        $contents->update($dataUpdates);

        return redirect()->route('contents.index');
    }





    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $contents = Contents::findOrFail($id);
        if (Storage::exists($contents)) {
            Storage::delete($contents->img);
        }
        $contents->delete();
        return redirect()->route('contents.index');
    }
}
