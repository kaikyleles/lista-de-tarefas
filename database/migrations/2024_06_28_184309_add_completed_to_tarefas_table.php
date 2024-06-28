<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddCompletedToTarefasTable extends Migration
{
    public function up()
    {
        Schema::table('tarefas', function (Blueprint $table) {
            $table->boolean('completed')->default(false);
        });
    }

    public function down()
    {
        Schema::table('tarefas', function (Blueprint $table) {
            $table->dropColumn('completed');
        });
    }
}

