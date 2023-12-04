<?php

namespace App\Controllers;

class Home extends BaseController
{
  public function index(): string
  {
    return view('welcome_message');
  }

  public function search()
  {
    exit(json_encode(['search' => $_GET['cidade']]));
  }
}
