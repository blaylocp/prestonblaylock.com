<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


// $app->group([
//   'middleware' => ['auth'],
//   'prefix'     => "api/v1/",
// ], function () use ($app) {
//
//   // API routes
//   $registerCRUD = function ($type, $controllerClass) use ($app) {
//     $app->get("$type", $controllerClass . '@index');
//     $app->get("$type/{idx}", $controllerClass . '@show');
//     $app->post("$type", $controllerClass . '@store');
//     $app->patch("$type/{idx}", $controllerClass . '@update');
//     $app->delete("$type/{idx}", $controllerClass . '@destroy');
//   };
//
//   $registerCRUD("portfolio", PortfolioController::class);
//
// });


Route::get('/', function () {
    return view('welcome');
});

Route::group([
    'prefix'     => 'api/v1/',
], function() {
       Route::resource('portfolios', 'PortfolioController');
});
