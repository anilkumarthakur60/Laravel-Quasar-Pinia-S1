<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\User\UserResource;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use Anil\FastApiCrud\Controller\CrudBaseController;

class UserController extends CrudBaseController
{
    public function __construct()
    {
        parent::__construct(
            User::class,
            StoreUserRequest::class,
            UpdateUserRequest::class,
            UserResource::class
        );
    }
    //
}
