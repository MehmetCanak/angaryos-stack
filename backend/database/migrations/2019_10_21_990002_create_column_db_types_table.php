<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateColumnDbTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('column_db_types', function (Blueprint $table) {
            $table->bigIncrements('id');
            
            $table->string('display_name')->nullable();
            $table->string('name')->nullable();
            $table->text('schema_code')->nullable();
            $table->text('description')->nullable();
            
            $table->boolean('state')->nullable();
            $table->integer('own_id');
            $table->integer('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('column_db_types');
    }
}
