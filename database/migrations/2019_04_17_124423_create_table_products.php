<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableProducts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
          $table->increments('id');
          $table->string('name');
          $table->integer('price');
          $table->text('description');
          $table->string('image');
          $table->timestamps();

          $table->unsignedInteger('brand_id')->nullable();
          $table->foreign('brand_id')->references('id')->on('brands')->onDelete('cascade');
          $table->unsignedInteger('color_id')->nullable();
          $table->foreign('color_id')->references('id')->on('colors')->onDelete('cascade');
          $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
