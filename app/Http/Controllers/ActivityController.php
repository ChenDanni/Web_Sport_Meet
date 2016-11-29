<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Model;


class ActivityController extends Controller {

    public function left_info(){
        $username = '用户名';
        $level = 2;
        $total = 3;     //        累计参加
        $avg = 3244;
        $avatar = '/icons/avatar1.png';

        $ret = array();
        $ret['username'] = $username;
        $ret['level'] = $level;
        $ret['total'] = $total;
        $ret['avg'] = $avg;
        $ret['avatar'] = $avatar;
        return \Response::json($ret);
    }
}
