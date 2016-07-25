<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PortfolioModel extends BaseModel {
  // Save the Data
  use SoftDeletes;

  // Constantly Consistent
  const TABLE_NAME = 'portfolio';
  const PORTFOLIO_ID = 'id';
  const PORTFOLIO_NAME = 'portfolio_name';
  const PORTFOLIO_FEATURED_IMG = 'portfolio_featured_image';
  const PORTFOLIO_DESC = 'portfolio_desc';

  // Database Table
  protected $table = SELF::TABLE_NAME;

  // Editable Data
  protected $fillable = [
    SELF::PORTFOLIO_NAME,
    SELF::PORTFOLIO_FEATURED_IMG,
    SELF::PORTFOLIO_DESC,
  ];

  //
  protected $dates = [
    SELF::FIELD_DELETED_AT,
  ];


}
