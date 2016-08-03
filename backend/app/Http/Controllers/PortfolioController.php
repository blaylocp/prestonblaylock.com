<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use \Neomerx\JsonApi\Document\Link;
use \Neomerx\JsonApi\Encoder\Encoder;
use \Neomerx\JsonApi\Encoder\Parameters\EncodingParameters;
use \Neomerx\JsonApi\Encoder\EncoderOptions;
use App\Http\Requests;
use App\Models\PortfolioModel;
use App\Schemas\PortfolioSchema;


class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $portfolios = array();
        $elquentPortfolios = PortfolioModel::all();

        foreach ($elquentPortfolios as $key => $value) {
          # code...
          $value['portfolio_featured_image'] = 'http://localhost:8000/api/v1/images/portfolios/' . $value['portfolio_featured_image'];
          array_push($portfolios, $value);
        }


        $encoder = Encoder::instance([
          PortfolioModel::class => PortfolioSchema::class,
        ], new EncoderOptions(JSON_PRETTY_PRINT));

        echo $encoder->encodeData($portfolios);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        dd("Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        dd("Store");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $portfolio = PortfolioModel::find($id);

        $encoder = Encoder::instance([
          PortfolioModel::class => PortfolioSchema::class,
        ], new EncoderOptions(JSON_PRETTY_PRINT));

        echo "<pre>" . $encoder->encodeData($portfolio) . "</pre>";

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        dd("Edit");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        dd("Update");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        dd("Destoy");
    }
}
