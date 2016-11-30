<?php
/**
 * Created by IntelliJ IDEA.
 * User: chendanni
 * Date: 16/11/30
 * Time: 上午11:40
 */
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Model;

class HomeController extends Controller {
    public function followings(){
        $avatar = 'ddd';
        $username = '测试';
        $level = 2;
        $avg = 32432;
        $recentact = '一起跑步》??';
        $joinat = '2013-12-22';

        $ret = array();
        $ret['avatar'] = $avatar;
        $ret['username'] = $username;
        $ret['level'] = $level;
        $ret['avg'] = $avg;
        $ret['recentact'] = $recentact;
        $ret['joinat'] = $joinat;

        $rets = array();
        $rets[0] = $ret;
        return \Response::json($rets);
    }

    public function following_detail(){

    }

    public function followers(){
        $avatar = 'ddd';
        $username = '测试follower';
        $level = 2;
        $avg = 32432;
        $recentact = '一起跑步》??';
        $joinat = '2013-12-22';

        $ret = array();
        $ret['avatar'] = $avatar;
        $ret['username'] = $username;
        $ret['level'] = $level;
        $ret['avg'] = $avg;
        $ret['recentact'] = $recentact;
        $ret['joinat'] = $joinat;

        $rets = array();
        $rets[0] = $ret;
        return \Response::json($rets);
    }
    public function follower_detail(){

    }
}