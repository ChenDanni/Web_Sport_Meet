<?php
/**
 * Created by IntelliJ IDEA.
 * User: chendanni
 * Date: 16/12/1
 * Time: 上午2:31
 */
namespace App\Models;

class topics extends \Eloquent {
    protected $table = 'topics';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'groupid',
        'authorid',
        'title',
        'content'
    ];

}