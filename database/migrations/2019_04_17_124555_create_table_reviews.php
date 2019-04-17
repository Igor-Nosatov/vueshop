<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableReviews extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
          $table->increments('id');
          $table->integer('star')->nullable();
          $table->string('name')->nullable();
          $table->string('email')->nullable();
          $table->string('phone')->nullable();
          $table->text('message')->nullable();
          $table->unsignedInteger('product_id')->nullable();
          $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
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
        Schema::dropIfExists('reviews');
    }
}
