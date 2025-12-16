<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\AspirationController;
use App\Http\Controllers\CabinetController;
use App\Http\Controllers\HomePageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomePageController::class, 'homepage'])->name('home');
Route::get('/about', [HomePageController::class, 'about'])->name('about');
Route::get('/aspiration', [AspirationController::class, 'aspiration'])->name('aspiration');
Route::get('/article', [ArticleController::class, 'article'])->name('article');
Route::get('/cabinet/{cabinet}', [CabinetController::class, 'cabinet'])->name('cabinet');
