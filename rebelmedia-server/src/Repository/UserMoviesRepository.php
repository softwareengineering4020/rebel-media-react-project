<?php

namespace App\Repository;

use App\Entity\UserMovies;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Movie|null find($id, $lockMode = null, $lockVersion = null)
 * @method Movie|null findOneBy(array $criteria, array $orderBy = null)
 * @method Movie[]    findAll()
 * @method Movie[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserMoviesRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, UserMovies::class);
    }

    public function transform(UserMovies $userMovies) 
    {
        return [
            'row_id'            => (int)    $userMovies->getId(),
            'userName'          => (string) $userMovies->getUserName(),
            'movieTitle'        => (string) $userMovies->getMovieTitle(),
            'movieDescription'  => (string) $userMovies->getMovieDescription()
        ];
    }

    public function transformAll()
    {
        $movies = $this->findAll();
        $moviesArray = [];

        foreach($movies as $movie) {
            $moviesArray[] = $this->transform($movie);
        }

        return $moviesArray;
    }
}
