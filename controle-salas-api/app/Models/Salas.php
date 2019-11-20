<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Salas extends Model
{
    //
    protected $table = 'Salas';

    public $timestamps = false;

    protected $fillable = [
        'id',
        'nome',
        'descricao'
    ];

}
