<?php
/**
 * Created by IntelliJ IDEA.
 * User: chendanni
 * Date: 16/12/1
 * Time: 上午2:29
 */
namespace App\Models;

class user_followings extends \Eloquent {
    protected $table = 'user_followings';
    protected $primaryKey = ['userid','followingid'];
    public $incrementing = false;

    protected $fillable = [

    ];


}