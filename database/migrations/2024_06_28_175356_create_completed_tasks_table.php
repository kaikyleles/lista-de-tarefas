<?php

// Migration para criar a tabela `completed_tasks`
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompletedTasksTable extends Migration
{
    public function up()
    {
        Schema::create('completed_tasks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('task_id');
            $table->date('completed_at');
            $table->timestamps();

            $table->foreign('task_id')->references('id')->on('tarefas')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('completed_tasks');
    }
}
