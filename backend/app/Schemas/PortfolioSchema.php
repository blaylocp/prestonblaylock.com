<?php

namespace App\Schemas;


use \Neomerx\JsonApi\Document\Link;
use \Neomerx\JsonApi\Schema\SchemaProvider;
use App\Models\PortfolioModel as Model;


class PortfolioSchema extends SchemaProvider {

  protected $resourceType = 'portfolio';

  public function getId($portfolio) {
    return $portfolio->id;
  }

  public function getAttributes($portfolio){
    return [
      'image_url' => $portfolio->portfolio_featured_image,
      'name' => $portfolio->portfolio_name,
      'desc' => $portfolio->portfolio_desc,
    ];
  }
}
