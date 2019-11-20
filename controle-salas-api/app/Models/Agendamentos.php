<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Agendamentos extends Model
{

    protected $table = 'Agendamentos';

    public $timestamps = false;

    protected $dates = ['data'];

    protected $fillable = [
        'id',
        'nomeResponsavel',
        'nomeTurma',
        'data',
        'id_sala'
        
    ];

    public function salas() {
        return $this->belongsTo('App\Models\Salas', 'id_sala', 'id');
    }
}
