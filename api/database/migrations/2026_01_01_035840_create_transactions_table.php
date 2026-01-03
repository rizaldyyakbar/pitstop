<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('transactions', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->onDelete('cascade');
        $table->decimal('amount', 15, 2); // Cocok buat angka rupiah yang besar
        $table->enum('type', ['income', 'expense']);
        $table->string('category')->default('Uncategorized');
        $table->text('description')->nullable();
        $table->string('image_path')->nullable(); // Untuk hasil scan struk
        $table->string('source')->default('manual'); // manual, ocr, atau email
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
