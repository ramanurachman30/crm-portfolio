<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PortfolioProjects extends Model
{
    use HasFactory;
    protected $table = 'portfolio_projects';
    protected $guarded = [];
}
