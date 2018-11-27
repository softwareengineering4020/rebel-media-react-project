-- phpMyAdmin SQL Dump
-- http://www.phpmyadmin.net
-- Host: localhost

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbrebelmedia`
--


-- --------------------------------------------------------
-- `admin` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` int(11) NOT NULL,
  `name` longtext COLLATE utf8_unicode_ci NOT NULL,
  `email` longtext COLLATE utf8_unicode_ci NOT NULL,
  `password` longtext COLLATE utf8_unicode_ci NOT NULL,
  `chat_status` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'offline'
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------
-- `actor` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `actor` (
  actor_id    SMALLINT     UNSIGNED NOT NULL AUTO_INCREMENT,
                           -- 16-bit unsigned int in the range of [0, 65535]
  first_name  VARCHAR(45)  NOT NULL,
  last_name   VARCHAR(45)  NOT NULL,
  last_update TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (actor_id),
  KEY idx_actor_last_name (last_name)   -- To build index (non-unique) on last_name
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
       -- Use InnoDB Engine, which supports foreign key and transaction
       -- Use Unicode 'utf8' character set for this table

-- --------------------------------------------------------
-- `movies` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `movies` (
  movies_id            SMALLINT     UNSIGNED NOT NULL AUTO_INCREMENT,
  title                VARCHAR(255) NOT NULL,
  description          TEXT         DEFAULT NULL,       -- Up to 64KB
  release_year         YEAR         DEFAULT NULL,       -- 'yyyy'
  language_id          TINYINT      UNSIGNED NOT NULL,  -- 8-bit unsigned int [0, 255]
  original_language_id TINYINT      UNSIGNED DEFAULT NULL,
  length               SMALLINT     UNSIGNED DEFAULT NULL,  -- 16-bit unsigned int [0, 65535]
  rating               ENUM('G','PG','PG-13','R','NC-17') DEFAULT 'G',
  special_features     SET('Trailers','Commentaries','Deleted Scenes','Behind the Scenes') DEFAULT NULL,
                                    -- Can take zero or more values from a SET
                                    -- But only one value from ENUM
  last_update          TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (movies_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
-- `movie_actor` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `movies_actor` (
  actor_id     SMALLINT UNSIGNED NOT NULL,
  movies_id      SMALLINT UNSIGNED NOT NULL,
  last_update  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (actor_id, movies_id),
  KEY idx_fk_movies_id (`movies_id`),
  CONSTRAINT fk_movies_actor_actor FOREIGN KEY (actor_id) REFERENCES actor (actor_id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_movies_actor_movies FOREIGN KEY (movies_id) REFERENCES movies (movies_id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------
-- `category` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `category` (
  category_id  TINYINT      UNSIGNED NOT NULL AUTO_INCREMENT,
  name         VARCHAR(25)  NOT NULL,
  last_update  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (category_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
-- `movies_category` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `movies_category` (
  movies_id      SMALLINT   UNSIGNED NOT NULL,
  category_id  TINYINT    UNSIGNED NOT NULL,
  last_update  TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (movies_id, category_id),
  CONSTRAINT fk_movies_category_movies FOREIGN KEY (movies_id) REFERENCES movies (movies_id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_movies_category_category FOREIGN KEY (category_id) REFERENCES category (category_id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
-- `movie_text` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `movies_text` (
  movies_id      SMALLINT      NOT NULL,
  title        VARCHAR(255)  NOT NULL,
  description  TEXT,
  PRIMARY KEY  (movies_id),
  FULLTEXT KEY idx_title_description (title, description)
     -- To build index on FULLTEXT to facilitate text search
     -- FULLTEXT is supported in MyISAM engine, NOT in InnoDB engine
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
-- `tvseries` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `tvseries` (
  tvseries_id              SMALLINT     UNSIGNED NOT NULL AUTO_INCREMENT,
  title                VARCHAR(255) NOT NULL,
  description          TEXT         DEFAULT NULL,       -- Up to 64KB
  release_year         YEAR         DEFAULT NULL,       -- 'yyyy'
  language_id          TINYINT      UNSIGNED NOT NULL,  -- 8-bit unsigned int [0, 255]
  original_language_id TINYINT      UNSIGNED DEFAULT NULL,
  length               SMALLINT     UNSIGNED DEFAULT NULL,  -- 16-bit unsigned int [0, 65535]
  seasons             SMALLINT     UNSIGNED DEFAULT NULL,  -- 16-bit unsigned int [0, 65535]
  episodes               SMALLINT     UNSIGNED DEFAULT NULL,  -- 16-bit unsigned int [0, 65535]
  rating               ENUM('G','PG','PG-13','R','NC-17') DEFAULT 'G',
  special_features     SET('Trailers','Commentaries','Deleted Scenes','Behind the Scenes') DEFAULT NULL,
                                    -- Can take zero or more values from a SET
                                    -- But only one value from ENUM
  last_update          TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (tvseries_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
-- `tvseries_actor` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `tvseries_actor` (
  actor_id     SMALLINT UNSIGNED NOT NULL,
  tvseries_id      SMALLINT UNSIGNED NOT NULL,
  last_update  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (actor_id, tvseries_id),
  KEY idx_fk_tvseries_id (`tvseries_id`),
  CONSTRAINT fk_tvseries_actor_actor FOREIGN KEY (actor_id) REFERENCES actor (actor_id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_tvseries_actor_tvseries FOREIGN KEY (tvseries_id) REFERENCES tvseries (tvseries_id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
-- `tvseries_category` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `tvseries_category` (
  tvseries_id      SMALLINT   UNSIGNED NOT NULL,
  category_id  TINYINT    UNSIGNED NOT NULL,
  last_update  TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (tvseries_id, category_id),
  CONSTRAINT fk_tvseries_category_tvseries FOREIGN KEY (tvseries_id) REFERENCES tvseries (tvseries_id)
    ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT fk_tvseries_category_category FOREIGN KEY (category_id) REFERENCES category (category_id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
-- `tvseries_text` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `tvseries_text` (
  tvseries_id      SMALLINT      NOT NULL,
  title        VARCHAR(255)  NOT NULL,
  description  TEXT,
  PRIMARY KEY  (tvseries_id),
  FULLTEXT KEY idx_title_description (title, description)
     -- To build index on FULLTEXT to facilitate text search
     -- FULLTEXT is supported in MyISAM engine, NOT in InnoDB engine
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


-- --------------------------------------------------------
-- `bookmark` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `bookmark` (
  `bookmark_id` int(11) NOT NULL,
  `title` longtext COLLATE utf8_unicode_ci NOT NULL,
  `url` longtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- --------------------------------------------------------
-- `chat` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `chat` (
  `id` int(10) unsigned NOT NULL,
  `from` varchar(255) NOT NULL DEFAULT '',
  `to` varchar(255) NOT NULL DEFAULT '',
  `message` text NOT NULL,
  `sent` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `recd` int(10) unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;


-- --------------------------------------------------------
-- `user` Table structure
--  --------------------------------------------------------


CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL,
  `name` longtext COLLATE utf8_unicode_ci NOT NULL,
  `email` longtext COLLATE utf8_unicode_ci NOT NULL,
  `password` longtext COLLATE utf8_unicode_ci NOT NULL,
  `facebook_profile_link` longtext COLLATE utf8_unicode_ci NOT NULL,
  `twitter_profile_link` longtext COLLATE utf8_unicode_ci NOT NULL,
  `chat_status` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'offline'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- --------------------------------------------------------
-- `entertainment_company` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `entertainment_company` (
  `entertainment_company_id` int(11) NOT NULL,
  `name` longtext COLLATE utf8_unicode_ci NOT NULL,
  `email` longtext COLLATE utf8_unicode_ci NOT NULL,
  `address` longtext COLLATE utf8_unicode_ci NOT NULL,
  `phone` longtext COLLATE utf8_unicode_ci NOT NULL,
  `website` longtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------
-- `message` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `message` (
  `message_id` int(11) NOT NULL,
  `message_thread_code` longtext NOT NULL,
  `message` longtext NOT NULL,
  `sender` longtext NOT NULL,
  `timestamp` longtext NOT NULL,
  `read_status` int(11) NOT NULL DEFAULT '0' COMMENT '0 unread 1 read'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;


-- --------------------------------------------------------
-- `message_thread` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `message_thread` (
  `message_thread_id` int(11) NOT NULL,
  `message_thread_code` longtext COLLATE utf8_unicode_ci NOT NULL,
  `sender` longtext COLLATE utf8_unicode_ci NOT NULL,
  `reciever` longtext COLLATE utf8_unicode_ci NOT NULL,
  `last_message_timestamp` longtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- --------------------------------------------------------
-- `note` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `note` (
  `note_id` int(11) NOT NULL,
  `title` longtext COLLATE utf8_unicode_ci NOT NULL,
  `note` longtext COLLATE utf8_unicode_ci NOT NULL,
  `user_type` longtext COLLATE utf8_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `timestamp_create` longtext COLLATE utf8_unicode_ci NOT NULL,
  `timestamp_last_update` longtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- --------------------------------------------------------
-- `noticeboard` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `noticeboard` (
  `notice_id` int(11) NOT NULL,
  `notice_title` longtext COLLATE utf8_unicode_ci NOT NULL,
  `notice` longtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- --------------------------------------------------------
-- `entertainment_project` Table structure
--  --------------------------------------------------------


CREATE TABLE IF NOT EXISTS `entertainment_project` (
  `entertainment_project_id` int(11) NOT NULL,
  `entertainment_project_code` longtext COLLATE utf8_unicode_ci NOT NULL,
  `title` longtext COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `demo_url` longtext COLLATE utf8_unicode_ci NOT NULL,
  `entertainment_project_category_id` int(11) NOT NULL,
  `entertainment_company_id` int(11) NOT NULL,
  `casts` longtext COLLATE utf8_unicode_ci NOT NULL,
  `project_status` longtext COLLATE utf8_unicode_ci NOT NULL,
  `project_note` longtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


-- --------------------------------------------------------
-- `entertainment_project_category` Table structure
--  --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `entertainment_project_category` (
  `entertainment_project_category_id` int(11) NOT NULL,
  `name` longtext COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;



-- --------------------------------------------------------
-- Indexes for the following Tables:
--  --------------------------------------------------------

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `bookmark`
--
ALTER TABLE `bookmark`
  ADD PRIMARY KEY (`bookmark_id`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `entertainment_company`
--
ALTER TABLE `entertainment_company`
  ADD PRIMARY KEY (`entertainment_company_id`);

--
-- Indexes for table `note`
--
ALTER TABLE `note`
  ADD PRIMARY KEY (`note_id`);

--
-- Indexes for table `noticeboard`
--
ALTER TABLE `noticeboard`
  ADD PRIMARY KEY (`notice_id`);

--
-- Indexes for table `entertainment_project`
--
ALTER TABLE `entertainment_project`
  ADD PRIMARY KEY (`entertainment_project_id`);

--
-- Indexes for table `project_category`
--
ALTER TABLE `entertainment_project_category`
  ADD PRIMARY KEY (`entertainment_project_category_id`);


-- --------------------------------------------------------
-- AUTO_INCREMENT for the following Tables:
--  --------------------------------------------------------

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `bookmark`
--
ALTER TABLE `bookmark`
  MODIFY `bookmark_id` int(11) NOT NULL AUTO_INCREMENT;
--
--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `entertainment_company`
  MODIFY `entertainment_company_id` int(11) NOT NULL AUTO_INCREMENT;

-- AUTO_INCREMENT for table `note`
--
ALTER TABLE `note`
  MODIFY `note_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `noticeboard`
--
ALTER TABLE `noticeboard`
  MODIFY `notice_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `entertainment_project`
--
ALTER TABLE `entertainment_project`
  MODIFY `entertainment_project_id` int(11) NOT NULL AUTO_INCREMENT;
--
ALTER TABLE `entertainment_project_category`
  MODIFY `entertainment_project_category_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;