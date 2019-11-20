<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class GenerateApiDocCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'apidoc:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate api documentation from annotations';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $apiControllersPath = app_path() . '\\Http\\Controllers';
        $publicDocPath      = public_path() . '\\docs\\';
    
        exec("apidoc -i ../../../ -o $publicDocPath");
        
        echo  'API documentation created successfully';
        return;
    }
}
