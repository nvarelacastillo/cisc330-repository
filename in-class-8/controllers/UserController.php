<?php

namespace controllers;
use models\User;

class UserController {
    public function index() {
        echo "Index";

        $user = new User();

        var_dump($user->userNames());
    }
}
