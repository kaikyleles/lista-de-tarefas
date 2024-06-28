<?php

// app/Models/CompletedTask.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompletedTask extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_id',
        'completed_at',
    ];

    public function tarefa()
    {
        return $this->belongsTo(Tarefas::class, 'task_id');
    }
}

