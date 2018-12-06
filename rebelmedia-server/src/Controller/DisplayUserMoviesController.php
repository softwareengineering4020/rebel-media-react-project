<?php
namespace App\Controller;

use App\Repository\UserMoviesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class DisplayUserMoviesController extends ApiController
{
    /**
    * @Route("/displayUserMovies", methods="GET")
    */
    public function index(UserMoviesRepository $userMoviesRepository)
    {
        $movies = $userMoviesRepository->transformAll();

        return $this->respond($movies);
    }    
}

?>