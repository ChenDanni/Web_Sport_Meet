<?php
/**
 * Created by IntelliJ IDEA.
 * User: chendanni
 * Date: 16/12/1
 * Time: 上午2:27
 */
namespace App\Models;

class user_groups extends \Eloquent {
    protected $table = 'user_groups';
    protected $primaryKey = ['userid','groupid'];
    public $incrementing = false;

    protected $fillable = [
        'joinat'
    ];


}