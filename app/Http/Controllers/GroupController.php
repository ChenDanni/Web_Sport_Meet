<?php
/**
 * Created by IntelliJ IDEA.
 * User: chendanni
 * Date: 16/11/30
 * Time: 下午4:23
 */
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Model;
class GroupController extends Controller {
    public function group_topics(){
        //根据组号得到帖子
        $title = '帖子1';
        $au_avatar = 'sss';
        $author = 'cdn';
        $public_time = '2016-11-2';
        $topic = array();
        $topic['title'] = $title;
        $topic['author_avatar'] = $au_avatar;
        $topic['author'] = $author;
        $topic['public_time'] = $public_time;

        $title2 = '帖子2';
        $au_avatar2 = 'sss';
        $author2 = 'cdn2';
        $public_time2 = '2016-11-22';
        $topic2 = array();
        $topic2['title'] = $title2;
        $topic2['author_avatar'] = $au_avatar2;
        $topic2['author'] = $author2;
        $topic2['public_time'] = $public_time2;

        $topics = array();
        $topics[0] = $topic;
        $topics[1] = $topic2;

        return $topics;
    }

    public function group_members(){
        $rank = 1;
        $avatar = '';
        $username = 'cdn';
        $step = 4873284;
        $user = array();
        $user['rank'] = $rank;
        $user['avatar'] = $avatar;
        $user['username'] = $username;
        $user['step'] = $step;

        $rank2 = 2;
        $avatar2 = '';
        $username2 = 'cdn2';
        $step2 = 232223;
        $user2 = array();
        $user2['rank'] = $rank2;
        $user2['avatar'] = $avatar2;
        $user2['username'] = $username2;
        $user2['step'] = $step2;

        $rets = array();
        $rets[0] = $user;
        $rets[1] = $user2;
        return $rets;
    }

//    ------------------------------------

    public function my_groups(){
        $name1 = '小组1';
        $name2 = '小组2';

        $rets = array();
        $rets[0] = $name1;
        $rets[1] = $name2;

        return \Response::json($rets);
    }
    public function my_group_detail(){
        $avatar = 'a';
        $groupname = '小组1';
        $creater = 'cdn';
        $createtime = '2016-11-1';
        $membernum = 23;
        $level = 4;
        $totalstep = 324323;
        $description = '爱跑步的少年聚集地,每天10km,坚持打卡~#百人百天#喜欢就来吧。爱跑步的少年聚集地,每天10km,坚持打卡~#百人百天#喜欢就来吧';

        $topics = $this->group_topics();
        $users = $this->group_members();

        $ret = array();
        $ret['avatar'] = $avatar;
        $ret['groupname'] = $groupname;
        $ret['creater'] = $creater;
        $ret['createtime'] = $createtime;
        $ret['membernum'] = $membernum;
        $ret['level'] = $level;
        $ret['totalsteps'] = $totalstep;
        $ret['description'] = $description;
        $ret['topics'] = $topics;
        $ret['users'] = $users;

        return \Response::json($ret);
    }
}