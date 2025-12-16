<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomePageController extends Controller
{
    public function homepage()
    {
        return inertia('homepage');
    }
    public function about()
    {
        return inertia('about');
    }
}
