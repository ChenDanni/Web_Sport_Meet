<?php
/**
 * Created by IntelliJ IDEA.
 * User: chendanni
 * Date: 16/12/1
 * Time: 上午12:36
 */
namespace App\Models;

class user extends \Eloquent {
    protected $table = 'users';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'avatar',
        'username',
        'password',
        'level',
        'exp',
        'email',
        'hobby',
        'phone',
        'birth',
        'location'
    ];

    public static function findUserByUsername($username){
        $user = self::where('username',$username)->first();
        return $user;
    }

}