<?php

use Illuminate\Database\Seeder;
use App\Models\PortfolioModel;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Insert Beginning Portfolio
        DB::table(PortfolioModel::TABLE_NAME)->insert([
            'portfolio_name' => 'CMC Live',
            'portfolio_featured_image' => '/vender/img/test.png',
            'portfolio_desc' => 'This is a test of the broadcast system',
        ]);

        DB::table(PortfolioModel::TABLE_NAME)->insert([
            'portfolio_name' => 'Castle rock',
            'portfolio_featured_image' => '/vender/img/test.png',
            'portfolio_desc' => 'This is a test of the broadcast system',
        ]);

        DB::table(PortfolioModel::TABLE_NAME)->insert([
            'portfolio_name' => 'Devil\'s Gate',
            'portfolio_featured_image' => '/vender/img/test.png',
            'portfolio_desc' => 'This is a test of the broadcast system',
        ]);

        DB::table(PortfolioModel::TABLE_NAME)->insert([
            'portfolio_name' => 'Wedding',
            'portfolio_featured_image' => '/vender/img/test.png',
            'portfolio_desc' => 'This is a test of the broadcast system',
        ]);
    }
}
