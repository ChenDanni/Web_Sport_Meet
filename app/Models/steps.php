<?php
/**
 * Created by IntelliJ IDEA.
 * User: chendanni
 * Date: 16/12/1
 * Time: 上午2:31
 */
namespace App\Models;

class steps extends \Eloquent {
    protected $table = 'steps';
    protected $primaryKey = ['userid','data'];
    public $incrementing = false;

    protected $fillable = [
        'steps',
    ];

}