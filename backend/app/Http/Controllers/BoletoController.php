<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Boleto;

class BoletoController extends Controller
{
  public function teste()
  {
    $boleto = new Boleto();
    $codigobarras = $boleto->gerarCodigoBarras();

    return view('boleto.index', ['codigobarras' => $codigobarras]);
  }
}
