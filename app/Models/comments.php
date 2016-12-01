<?php
/**
 * Created by IntelliJ IDEA.
 * User: chendanni
 * Date: 16/12/1
 * Time: 上午2:32
 */
namespace App\Models;

class comments extends \Eloquent {
    protected $table = 'comments';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'topicid',
        'authorid',
        'content'
    ];

}