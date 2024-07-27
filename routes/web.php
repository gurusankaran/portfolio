<?php

use App\Http\Controllers\Landing;
use App\Http\Controllers\Register;
use App\Http\Controllers\telegram;
use Illuminate\Support\Facades\Route;



Route::get('/',function(){
    return view('index');
});

Route::post('/api/telegram/send',[telegram::class,'sendMessage']);
