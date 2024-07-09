<?php

namespace App\Http\Controllers;

use App\Models\PortfolioProjects;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PortfolioProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $portfolio_projects = PortfolioProjects::all();
        return Inertia::render('PortfolioProjects/Index', ['portfolio_projects' => $portfolio_projects]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('PortfolioProjects/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        // dd($request->all());
        $request->validate([
            'img' => 'required|image|mimes:png,jpg,jpeg,gif'
        ]);

        $data = $request->except('img', 'porfolio-projects');
        $data['img'] = $request->file('img')->store('portfolio-projects', 'public');
        // dd($data);
        PortfolioProjects::create($data);
        return redirect()->route('portfolio-projects.index');
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
        $portfolio_projects = PortfolioProjects::find($id);
        return Inertia::render('PortfolioProjects/Edit', ['portfolio_projects' => $portfolio_projects]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        // dd($request->all());
        $request->validate([
            'img' => 'nullable|image|mimes:png,jpg,jpeg,gif|max:2048',
        ]);

        $portfolio_projects = PortfolioProjects::findOrFail($id);

        $dataUpdates = [
            'title' => $request->title,
            'sub_title' => $request->sub_title,
            'project_name' => $request->project_name,
            'project_description' => $request->project_description,
        ];

        if ($request->hasFile('img')) {
            Storage::delete($portfolio_projects->img);
            $img = $request->file('img')->store('portfolio-projects', 'public');
            $dataUpdates['img'] = $img;
        }

        $portfolio_projects->update($dataUpdates);

        return redirect()->route('portfolio-projects.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $portfolio_projects = PortfolioProjects::findOrFail($id);
        if (Storage::exists($portfolio_projects->img)) {
            Storage::delete($portfolio_projects->img);
        }
        $portfolio_projects->delete();
        return redirect()->route('portfolio-projects.index');
    }
}
