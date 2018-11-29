<?php
namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class RegisterController extends ApiController
{
    /**
     * @Route("/register", methods="POST")
     */
     public function register(Request $request, UserRepository $userRepository, EntityManagerInterface $em)
     {
        $user = New User;

        $request = $this->transformJsonBody($request);
        
        if (! $request) {
            return $this->respondValidationError('Please provide a valid request!');
        }

        if (!$request->get('email') || !$request->get('password')) {
            return $this->respondValidationError('Please provide an email and password!');
        }

        $user->setName($request->get('name'));
        $user->setEmail($request->get('email'));
        $user->setPassword($request->get('password'));
        $em->persist($user);
        $em->flush();

        return $this->respondCreated($userRepository->transform($user));
     }
}

?>