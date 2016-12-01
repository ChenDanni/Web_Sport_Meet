<?php
/**
 * Created by IntelliJ IDEA.
 * User: chendanni
 * Date: 16/12/1
 * Time: 上午2:33
 */
namespace App\Models;

class hdata extends \Eloquent {
    protected $table = '24hdata';
    protected $primaryKey = 'userid';
    public $incrementing = true;

    protected $fillable = [
        'time',
        'steps',
    ];

}