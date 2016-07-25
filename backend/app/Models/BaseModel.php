<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

abstract class BaseModel extends Model {
    /** Model's table name */
    const TABLE_NAME = null;

    /** Model's primary key field name */
    const FIELD_ID = 'id';

    /** Field name */
    const FIELD_CREATED_AT = self::CREATED_AT;

    /** Field name */
    const FIELD_UPDATED_AT = self::UPDATED_AT;

    /** Field name (For Soft Delets) */
    const FIELD_DELETED_AT = 'deleted_at';
}
