<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class HomeController extends Controller
{
   public function index()
 {
  $data['products'] = Product::take(8)->get();
  return response()->json($data, 200);
 }
}
