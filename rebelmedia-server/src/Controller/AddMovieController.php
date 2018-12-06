<?php
namespace App\Controller;

use App\Entity\UserMovies;
use App\Repository\UserMoviesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class AddMovieController extends ApiController
{
    /**
     * @Route("/addMovie", methods="POST")
     */
     public function addMovie(Request $request, UserMoviesRepository $userMovieRepository, EntityManagerInterface $em)
     {
        $userMovie = New UserMovies;
        $request = $this->transformJsonBody($request);

        if (!$request) {
            return $this->respondValidationError('Please provide a valid request!');
        }

        if (!$request->get('userName') || !$request->get('movieTitle')) {
            return $this->respondValidationError('Please provide a username and movie!');
        }

        $userMovie->setUserName($request->get('userName'));
        $userMovie->setMovieTitle($request->get('movieTitle'));
        $userMovie->setMovieDescription($request->get('movieDescription'));
        $em->persist($userMovie);
        $em->flush();

        return $this->respondCreated($userMovieRepository->transform($userMovie));
     }
}

?>