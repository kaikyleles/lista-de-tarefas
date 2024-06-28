<?php

// routes/api.php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TarefasController;

Route::get('/tarefas', [TarefasController::class, 'index']);
Route::post('/tarefas', [TarefasController::class, 'store']);
Route::delete('/tarefas/{id}', [TarefasController::class, 'destroy']);
Route::post('/tarefas/{id}/complete', [TarefasController::class, 'complete']);
Route::post('/tarefas/{id}/undo-complete', [TarefasController::class, 'undoComplete']);
Route::get('/statistics', [TarefasController::class, 'statistics']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


