<?php
namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class UserController extends ApiController
{
    /**
     * @Route("/users", methods="GET")
     */
     public function index(UserRepository $userRepository)
     {
        $users = $userRepository->transformAll();

        return $this->respond($users);
     }
}

?>