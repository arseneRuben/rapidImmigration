-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 20 sep. 2023 à 18:36
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4
DROP DATABASE IF EXISTS immigration;
CREATE DATABASE immigration ;
use immigration;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `immigration`
--

-- --------------------------------------------------------

--
-- Structure de la table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `foler_name` varchar(100) DEFAULT NULL,
  `foler_path` varchar(255) DEFAULT NULL,
  `consultant_id` int(11) DEFAULT NULL,
  `current_step` varchar(100) DEFAULT 'CREATED',
  `statut` int(11) DEFAULT 0,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `passport_number` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `profile_image` varchar(50) DEFAULT NULL,
  `phone_number` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `street` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `zip_code` varchar(10) DEFAULT NULL,
  `birth_date` varchar(50) DEFAULT NULL,
  `birth_place` varchar(50) DEFAULT NULL,
  `birth_country` varchar(50) DEFAULT NULL,
  `passport` varchar(50) DEFAULT NULL,
  `resume` varchar(50) DEFAULT NULL,
  `wes_report` varchar(50) DEFAULT NULL,
  `marriage_certificate` varchar(50) DEFAULT NULL,
  `birth_certificate` varchar(50) DEFAULT NULL,
  `other_documents` varchar(50) DEFAULT NULL,
  `marital_status` int(11) DEFAULT NULL,
  `spouse_name` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `customers`
--

INSERT INTO `customers` (`id`, `foler_name`, `foler_path`, `consultant_id`, `current_step`, `statut`, `first_name`, `last_name`, `gender`, `passport_number`, `email`, `profile_image`, `phone_number`, `country`, `city`, `street`, `address`, `zip_code`, `birth_date`, `birth_place`, `birth_country`, `passport`, `resume`, `wes_report`, `marriage_certificate`, `birth_certificate`, `other_documents`, `marital_status`, `spouse_name`, `created_at`, `updated_at`) VALUES
(6, NULL, NULL, 1, 'CREATED', 0, 'ARISTIDE ', 'MONO', '1', '435455555554', NULL, NULL, '+237894561454', 'Azerbaijan', 'Sulutapa', 'WEAR', '', '87653', '1983-09-06', 'TIBATI', 'Cameroon', 'TEST.PNG', '5445fb-f.pdf', NULL, '420-DS1-TT.pdf', 'rootkey.csv', '5445fb-f.pdf', 1, 'JEANNE D\'ARC', '2023-09-18 08:09:30', NULL),
(7, NULL, NULL, 1, 'CREATED', 0, 'CLAUDIA', 'MEDIEMEN', '1', '98934593', NULL, NULL, '785225655', 'Brunei', 'Kuala Balai', '1750 Rue Crevier', '', 'H4L2X5R', '1988-10-10', 'HORISHA', 'Belarus', '420-DS1-TT.pdf', 'épervier1.png', NULL, 'CAIN23-1850578.pdf', '420-SRD-TT.pdf', '5445fb-f.pdf', 1, 'JEAN-MARIE', '2023-09-18 08:30:28', NULL),
(8, NULL, NULL, 1, 'CREATED', 0, 'NINA FLORALY', 'BADJO', '1', '3443923', 'nina@gmail.com', 'zack.jpg', 'rio', 'Bahrain', 'Madinat `Isa', 'RIO', '', '434454', '1990-12-11', 'brasilia', 'Azerbaijan', 'Formulaire - Consentement à la divulgation de rens', 'TEST.PNG', 'IMM5754_1-SC6JIW1.pdf', 'LetterRecommendationArsene.docx', 'Memoire_5GI_Arsene.pdf', 'TEST2.PNG', 0, '', '2023-09-20 11:50:43', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `consultant_id` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `due_date` datetime DEFAULT NULL,
  `Statut` enum('En attente','En cours','Terminee') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `phone_number` varchar(100) DEFAULT NULL,
  `google_id` int(11) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL,
  `access_level` enum('admin','consultant','client') DEFAULT 'client'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



CREATE TABLE `programs` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `programs`
--
ALTER TABLE `programs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `type` (`type`);
COMMIT;



--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `last_name`, `first_name`, `email`, `password`, `profile_image`, `phone_number`, `google_id`, `gender`, `access_level`) VALUES
(1, 'FOKAM POKA', 'ARSENE', 'fopoar@gmail.com', '$2b$10$mzyEQjcQ8j62HV/kLkggWuljCuIW5X4iw3N0NemW0Tb7iwZeOs4cm', 'photo.PNG', NULL, NULL, 0, 'admin'),
(2, NULL, NULL, 'ruben@gmail.com', '$2b$10$0Bsy0JXgxlkzvoQ4zZEfxeFBjPQZ.ygynQOHlFimHI5gcTcM8r4Ti', NULL, NULL, NULL, NULL, 'consultant'),
(3, NULL, NULL, 'aminebenhassine@gmail.com', '$2b$10$DEyeZ3xp2xGQ98OsNmu4leSkBDWPNMW.0jahEmoWpgV5mCcdLV0/G', NULL, NULL, NULL, NULL, 'client'),
(4, 'OUABE', 'ALAIN', 'fopoar4@gmail.com', '$2b$10$118weumuFCC8AG4FSTDrKupAe19Zn//zCiB5PxxIkD7wLVtBr7de.', NULL, NULL, NULL, NULL, 'client');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `author_id` (`author_id`);

--
-- Index pour la table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `consultant_id` (`consultant_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`);

--
-- Contraintes pour la table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `tasks_ibfk_2` FOREIGN KEY (`consultant_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
