<?php
/**
 * Created by IntelliJ IDEA.
 * User: chendanni
 * Date: 16/12/1
 * Time: 上午2:32
 */
namespace App\Models;

class administer extends \Eloquent {
    protected $table = 'administer';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'adminname',
        'password'
    ];

}