<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

// Import the Models to use the Constants
use App\Models\PortfolioModel;

class CreatePortfoliosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(PortfolioModel::TABLE_NAME, function (Blueprint $table) {
            $table->increments(PortfolioModel::PORTFOLIO_ID);
            $table->string(PortfolioModel::PORTFOLIO_NAME, 50);
            $table->string(PortfolioModel::PORTFOLIO_FEATURED_IMG);
            $table->longText(PortfolioModel::PORTFOLIO_DESC);
            $table->timestamps();
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
        Schema::drop(PortfolioModel::TABLE_NAME);
    }
}
