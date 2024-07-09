<?php

use App\Http\Controllers\AbouteMeController;
use App\Http\Controllers\ContentsController;
use App\Http\Controllers\MedsosesController;
use App\Http\Controllers\PortfolioProjectController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('contents', ContentsController::class);
Route::post('/contents/update/{id}', [ContentsController::class, 'update'])->name('contents.updateContents');

Route::resource('about_me', AbouteMeController::class);
Route::resource('medsoses', MedsosesController::class);
Route::post('/medsoses/update/{id}', [MedsosesController::class, 'update'])->name('medsoses.updateMedsoses');

Route::resource('portfolio-projects', PortfolioProjectController::class);
Route::post('/portfolio-projects/update/{id}', [PortfolioProjectController::class, 'update'])->name('portfolio-projects.updatePortfolioProjects');

require __DIR__.'/auth.php';
