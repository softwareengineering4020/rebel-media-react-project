<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserMovieRepository")
 */
class UserMovies
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $row_id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $movietitle;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $moviedescription;

    public function getId(): ?int
    {
        return $this->row_id;
    }

    public function getMovieTitle(): ?string
    {
        return $this->movietitle;
    }

    public function setMovieTitle(string $movieTitle): self
    {
        $this->movietitle = $movieTitle;

        return $this;
    }

    public function getMovieDescription(): ?string
    {
        return $this->moviedescription;
    }

    public function setMovieDescription(string $movieDescription): self
    {
        $this->moviedescription = $movieDescription;

        return $this;
    }

    public function getUserName(): ?string
    {
        return $this->username;
    }

    public function setUserName(string $userName) : self
    {
        $this->username = $userName;

        return $this;
    }
}
