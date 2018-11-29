<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $user_id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $facebook_profile_link;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $twitter_profile_link;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $chat_status;

    public function getId(): ?int
    {
        return $this->user_id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getFacebookProfileLink(): ?string
    {
        return $this->facebook_profile_link;
    }

    public function setFacebookProfileLink(string $facebook_profile_link): self
    {
        $this->facebook_profile_link = $facebook_profile_link;

        return $this;
    }

    public function getTwitterProfileLink(): ?string
    {
        return $this->twitter_profile_link;
    }

    public function setTwitterProfileLink(string $twitter_profile_link): self
    {
        $this->twitter_profile_link = $twitter_profile_link;

        return $this;
    }

    public function getChatStatus(): ?string
    {
        return $this->chat_status;
    }

    public function setChatStatus(string $chat_status): self
    {
        $this->chat_status = $chat_status;

        return $this;
    }
}
