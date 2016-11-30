<?php
/**
 * Created by IntelliJ IDEA.
 * User: chendanni
 * Date: 16/11/30
 * Time: 下午4:43
 */
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Model;

class TopicController extends Controller {
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

        $rets = array();
        $rets[0] = $title;
        $rets[1] = $title2;

        return \Response::json($rets);
    }
    public function topic_detail(){

    }
}