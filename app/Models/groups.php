<?php
/**
 * Created by IntelliJ IDEA.
 * User: chendanni
 * Date: 16/12/1
 * Time: 上午2:32
 */
namespace App\Models;

class groups extends \Eloquent {
    protected $table = 'groups';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'name',
        'avatar',
        'level',
        'description',
        'authorid'
    ];

}