<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Model;

class TestController extends Controller {
    public function test(){
        $ret = array();
        $ret['res'] = 'success';
        return \Response::json($ret);
    }
}
