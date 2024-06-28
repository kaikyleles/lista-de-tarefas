<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIsSuggestionToTarefasTable extends Migration
{
    public function up()
    {
        Schema::table('tarefas', function (Blueprint $table) {
            $table->boolean('is_suggestion')->default(false);
        });
    }

    public function down()
    {
        Schema::table('tarefas', function (Blueprint $table) {
            $table->dropColumn('is_suggestion');
        });
    }
}

