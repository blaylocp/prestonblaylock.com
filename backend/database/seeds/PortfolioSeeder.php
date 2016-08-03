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
            'portfolio_featured_image' => 'cmc-letstruck.jpg',
            'portfolio_desc' => 'This is a test of the broadcast system',
        ]);

        DB::table(PortfolioModel::TABLE_NAME)->insert([
            'portfolio_name' => 'Castle Rock',
            'portfolio_featured_image' => 'chridaho.jpg',
            'portfolio_desc' => 'This is a test of the broadcast system',
        ]);

        DB::table(PortfolioModel::TABLE_NAME)->insert([
            'portfolio_name' => 'Devil\'s Gate',
            'portfolio_featured_image' => 'Devils-Gate.jpg',
            'portfolio_desc' => 'This is a test of the broadcast system',
        ]);

        DB::table(PortfolioModel::TABLE_NAME)->insert([
            'portfolio_name' => 'Dora & Eugene Wedding',
            'portfolio_featured_image' => 'eugene-dora-wedding.jpg',
            'portfolio_desc' => 'This is a test of the broadcast system',
        ]);

        DB::table(PortfolioModel::TABLE_NAME)->insert([
            'portfolio_name' => 'Cornerstone Counseling',
            'portfolio_featured_image' => 'cornerstone-counseling.jpg',
            'portfolio_desc' => 'This is a test of the broadcast system',
        ]);

        DB::table(PortfolioModel::TABLE_NAME)->insert([
            'portfolio_name' => 'Mesa Lower Falls',
            'portfolio_featured_image' => 'mesa-lower-falls.jpg',
            'portfolio_desc' => 'This is a test of the broadcast system',
        ]);

        DB::table(PortfolioModel::TABLE_NAME)->insert([
            'portfolio_name' => 'Agri-Service',
            'portfolio_featured_image' => 'agri-service.jpg',
            'portfolio_desc' => 'This is a test of the broadcast system',
        ]);

        DB::table(PortfolioModel::TABLE_NAME)->insert([
            'portfolio_name' => 'MTNTK Performance',
            'portfolio_featured_image' => 'mtntk.jpg',
            'portfolio_desc' => 'This is a test of the broadcast system',
        ]);

        DB::table(PortfolioModel::TABLE_NAME)->insert([
            'portfolio_name' => 'Noelle & Spencer Engagement',
            'portfolio_featured_image' => 'spencer-noelle.jpg',
            'portfolio_desc' => 'This is a test of the broadcast system',
        ]);
    }
}
