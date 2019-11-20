<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('cors')->prefix('salas')->group(function() {
    Route::options('/', function() {return;});
    Route::options('/{id}', function() {return;});
    Route::get('/', 'SalasController@list')->name('list_salas');
    Route::get('/{id}', 'SalasController@get')->name('get_salas');
    Route::post('/', 'SalasController@post')->name('post_salas');
    Route::put('/{id}', 'SalasController@put')->name('put_salas');
    Route::delete('/{id}', 'SalasController@delete')->name('delete_salas');
});

Route::middleware('cors')->prefix('agendamentos')->group(function() {
    Route::options('/', function() {return;});
    Route::options('/{id}', function() {return;});
    Route::get('/', 'AgendamentosController@list')->name('list_agendamento');
    Route::get('/{id}', 'AgendamentosController@get')->name('get_agendamento');
    Route::get('/sala/{id}', 'AgendamentosController@getPorSala')->name('getPorSala_agendamento');
    Route::post('/', 'AgendamentosController@post')->name('post_agendamento');
    Route::post('/array', 'AgendamentosController@postArray')->name('postArray_agendamento');
    Route::put('/{id}', 'AgendamentosController@put')->name('put_agendamento');
    Route::delete('/{id}', 'AgendamentosController@delete')->name('delete_agendamento');
});
