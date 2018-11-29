<?php
namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class LoginController extends ApiController
{
    /**
     * @Route("/login", methods="GET")
     */
     public function login(Request $request, UserRepository $userRepository, EntityManagerInterface $em)
     {
        $request = $this->transformJsonBody($request);
        
        if (! $request) {
            return $this->respondValidationError('Please provide a valid request!');
        }

        if (!$request->get('email') || !$request->get('password')) {
            return $this->respondValidationError('Please provide an email and password!');
        }

        $user = New User;
        $user->setName($request->get('name'));
        $user->setEmail($request->get('email'));
        $user->setPassword($request->get('password'));
        $user->setFacebookProfileLink($request->get('facebook_profile_link'));
        $user->setTwitterProfileLink($request->get('twitter_profile_link'));
        $user->setChatStatus($request->get('chat_status'));
        $em->persist($user);
        $em->flush();

        return $this->respondCreated($userRepository->transform($user));
     }
}

?>