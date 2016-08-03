<?php
namespace App\Filters;

use Intervention\Image\Image;
use Intervention\Image\Filters\FilterInterface;

class PortfolioFilter implements FilterInterface
{
    public function applyFilter(Image $image)
    {
        return $image->resize(635, null, function ($constraint) {
          $constraint->aspectRatio();
          $constraint->upsize();
        });
    }
}
