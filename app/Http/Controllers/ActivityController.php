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

    public function act_list(){
        $id = 1;
        $title = 'title1';
        $author = 'au1';
        $description = '一起跑步吗';
        $join = 2;
        $start = '2016-10-11';
        $end = '2016-12-11';

        $id2 = 2;
        $title2 = 'title2';
        $author2 = 'au2';
        $description2 = '一起跑步吗2';
        $join2 = 23;
        $start2 = '2016-10-12';
        $end2 = '2016-12-12';

        $ret = array();
        $ret['id'] = $id;
        $ret['title'] = $title;
        $ret['author'] = $author;
        $ret['description'] = $description;
        $ret['join'] = $join;
        $ret['start'] = $start;
        $ret['end'] = $end;

        $ret2 = array();
        $ret2['id'] = $id2;
        $ret2['title'] = $title2;
        $ret2['author'] = $author2;
        $ret2['description'] = $description2;
        $ret2['join'] = $join2;
        $ret2['start'] = $start2;
        $ret2['end'] = $end2;

        $rets = array();
        $rets[0] = $ret;
        $rets[1] = $ret2;


        return \Response::json($rets);
    }

    public function act_detail(){
        $title = 'title1';
        $author = 'au1';
        $description = '一起跑步吗';
        $join = 2;
        $start = '2016-10-11';
        $end = '2016-12-11';

        $users = array();
        $avatar1 = 'ss';
        $name1 = '陈睿';
        $avg1 = '2321';
        $user1 = array();
        $user1['avatar'] = $avatar1;
        $user1['name'] = $name1;
        $user1['avg'] = $avg1;

        $avatar2 = 'ss';
        $name2 = '陈danni';
        $avg2 = '2321';
        $user2 = array();
        $user2['avatar'] = $avatar2;
        $user2['name'] = $name2;
        $user2['avg'] = $avg2;

        $users[0] = $user1;
        $users[1] = $user2;


        $ret['title'] = $title;
        $ret['author'] = $author;
        $ret['description'] = $description;
        $ret['join'] = $join;
        $ret['start'] = $start;
        $ret['end'] = $end;
        $ret['users'] = $users;

        return \Response::json($ret);
    }

    public function public_act_list(){
        return $this->act_list();
    }

    public function my_join_act_list(){
        return $this->act_list();
    }

    public function my_join_act_detail(){
        $title = 'title1';
        $author = 'au1';
        $description = '一起跑步吗';
        $join = 2;
        $start = '2016-10-11';
        $end = '2016-12-11';

        $users = array();
        $avatar1 = 'ss';
        $name1 = '陈睿';
        $avg1 = '2321';
        $rank = 1;
        $user1 = array();
        $user1['avatar'] = $avatar1;
        $user1['name'] = $name1;
        $user1['avg'] = $avg1;
        $user1['rank'] = $rank;

        $avatar2 = 'ss';
        $name2 = '陈danni';
        $avg2 = '2321';
        $rank2 = 2;
        $user2 = array();
        $user2['avatar'] = $avatar2;
        $user2['name'] = $name2;
        $user2['avg'] = $avg2;
        $user2['rank'] = $rank2;

        $users[0] = $user1;
        $users[1] = $user2;


        $ret['title'] = $title;
        $ret['author'] = $author;
        $ret['description'] = $description;
        $ret['join'] = $join;
        $ret['start'] = $start;
        $ret['end'] = $end;
        $ret['users'] = $users;

        return \Response::json($ret);
    }
}
