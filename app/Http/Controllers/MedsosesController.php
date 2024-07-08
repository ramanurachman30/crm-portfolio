<?php

namespace App\Http\Controllers;

use App\Models\Medsoses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MedsosesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $medsoses = Medsoses::all();
        return Inertia::render('Medsoses/Index', ['medsoses' => $medsoses]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Medsoses/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'img' => 'required|image|mimes:jpg,png,jpeg',
        ]);

        $data = $request->except('img', 'medsoses');
        $data['img'] = $request->file('img')->store('medsoses', 'public');
        Medsoses::create($data);
        return redirect()->route('medsoses.index');
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
        $medsoses = Medsoses::find($id);
        return Inertia::render('Medsoses/Edit', ['medsoses' => $medsoses]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        // dd($request->all());
        $request->validate([
            'title' => 'required|string|max:255',
            'img' => 'nullable|image|mimes:jpg,png,jpeg|max:2048',
        ]);

        $medsoses = Medsoses::findOrFail($id);

        $dataUpdates = [
            'title' => $request->title,
        ];

        if ($request->hasFile('img')) {
            Storage::delete($medsoses->img);
            $img = $request->file('img')->store('medsoses', 'public');
            $dataUpdates['img'] = $img;
        }
        // dd($dataUpdates);

        $medsoses->update($dataUpdates);

        return redirect()->route('medsoses.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $data = Medsoses::findOrFail($id);
        if (Storage::exists($data->img)) {
            Storage::delete($data->img);
        }
        $data->delete();
        return redirect()->route('medsoses.index');
    }
}
