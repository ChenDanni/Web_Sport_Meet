<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
Route::group(['prefix' => '/test/'], function () {
    Route::get('test','TestController@test');
});
Route::group(['middleware' => 'api_header', 'prefix' => '/activity/'], function () {
    Route::get('left_info','ActivityController@left_info');
    Route::get('act_list','ActivityController@act_list');
    Route::get('act_detail/{id?}','ActivityController@act_detail');
    Route::get('public_act_list','ActivityController@public_act_list');
    Route::get('my_join_act_list','ActivityController@my_join_act_list');
    Route::get('my_join_act_detail/{id?}','ActivityController@my_join_act_detail');
});
Route::group(['middleware' => 'api_header', 'prefix' => '/home/'], function () {
    Route::get('followings','HomeController@followings');
    Route::get('following_detail','HomeController@following_detail');
    Route::get('followers','HomeController@followers');
    Route::get('follower_detail','HomeController@follower_detail');
});

