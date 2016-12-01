<?php
/**
 * Created by IntelliJ IDEA.
 * User: chendanni
 * Date: 16/12/1
 * Time: 上午2:32
 */
namespace App\Models;

class actions extends \Eloquent {
    protected $table = 'actions';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'userid',
        'content'
    ];

}