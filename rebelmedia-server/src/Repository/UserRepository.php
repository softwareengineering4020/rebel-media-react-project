<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, User::class);
    }

    public function transform(User $users)
    {
        return [
            'user_id'   => (int) $users->getId(),
            'name'      => (string) $users->getName(),
            'email'     => (string) $users->getEmail(),
            'password'  => (string) $users->getPassword(),
            'facebook_profile_link' => (string) $users->getFacebookProfileLink(),
            'twitter_profile_link' => (string) $users->getTwitterProfileLink(),
            'chat_status' => (string) $users->getChatStatus(),
            'isAdmin'   => (int) $users->getIsAdmin()
        ];
    }

    public function transformAll()
    {
        $users = $this->findAll();
        $usersArray = [];

        foreach($users as $user) {
            $usersArray[] = $this->transform($user);
        }

        return $usersArray;
    }

    public function findUser()
    {
        $user = $this->findOneBy(array('email' => email, 'password' => $password));
        $user = $this->transform($user);
        return $user;   
    }

    // /**
    //  * @return User[] Returns an array of User objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?User
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
