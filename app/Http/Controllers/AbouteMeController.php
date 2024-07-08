<?php

namespace App\Http\Controllers;

use App\Models\AboutMe;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AbouteMeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $about_me = AboutMe::all();
        return Inertia::render('AboutMe/Index', ['about_me' => $about_me]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('AboutMe/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        // $request->validate([
        //     "title" => 'required',
        //     "description" => 'required',
        // ]);
        // dd($request->all());
        $request = AboutMe::create([
            "title" => $request->title,
            "description" => $request->description,
        ]);



        // AboutMe::create($request->all());
        return redirect()->route('about_me.index');
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
        $about_me = AboutMe::find($id);
        return Inertia::render('AboutMe/Edit', ['about_me' => $about_me]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $request->validate([
            "title" => 'required',
            "description" => 'required',
        ]);

        $about_me = AboutMe::find($id);
        $about_me->update($request->all());
        return redirect()->route('about_me.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $about_me = AboutMe::find($id);
        $about_me->delete();
        return redirect()->route('about_me.index');
    }
}
