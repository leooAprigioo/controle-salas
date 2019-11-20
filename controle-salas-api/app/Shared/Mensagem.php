<?php

namespace App\Shared;

class Mensagem {

    public static function MensagemJson($codigo, $mensagem, $status_code = 200) {
        return response()->json
        (
            [
                "codigo" => $codigo,
                "mensagem" => $mensagem,
                "status_Code" => $status_code
            ], 
            $status_code,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }

}