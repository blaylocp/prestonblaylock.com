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
            'name' => str_random(10),
            'email' => str_random(10).'@gmail.com',
            'password' => bcrypt('secret'),
        ]);
    }
}
