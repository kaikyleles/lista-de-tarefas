<?php

// Migration para criar a tabela `tarefas`
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTarefasTable extends Migration
{
    public function up()
    {
        Schema::create('tarefas', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tarefas');
    }
}
