<?php
/**
 * Created by IntelliJ IDEA.
 * User: chendanni
 * Date: 16/12/1
 * Time: 上午2:30
 */
namespace App\Models;

class user_activity extends \Eloquent {
    protected $table = 'user_activity';
    protected $primaryKey = ['userid','activityid'];
    public $incrementing = false;

    protected $fillable = [

    ];


}