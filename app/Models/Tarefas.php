<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarefas extends Model
{
    use HasFactory;

    protected $table = 'tarefas'; // Nome da tabela no banco de dados

    protected $fillable = [
        'name',
        'completed',
        'is_suggestion',
    ];
}
