<?php
/**
 * Created by IntelliJ IDEA.
 * User: user
 * Date: 16/12/1
 * Time: 上午2:32
 */
namespace App\Models;

class activities extends \Eloquent {
    protected $table = 'activities';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
        'name',
        'description',
        'state',
        'startat',
        'endat',
        'authorid'
    ];

}