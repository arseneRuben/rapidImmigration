
DROP DATABASE IF EXISTS dbruswel;
CREATE DATABASE dbruswel ;
use dbruswel;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";



CREATE TABLE `folders` (
  `id` integer  PRIMARY KEY,
  `folderNumber` integer NOT NULL,
  `currentStep` char(100) DEFAULT 'CREATED',
  `consultantId` integer DEFAULT NULL,
  `customerId` integer DEFAULT NULL,
  `programId` integer DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `lastVisit` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `comments` char(255) 
);








CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
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
  `marital_status` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp()

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `customers`
--

INSERT INTO `customers` (`id`,   `first_name`, `last_name`, `gender`, `passport_number`, `email`, `profile_image`, `phone_number`, `country`, `city`, `street`, `address`, `zip_code`, `birth_date`, `birth_place`, `birth_country`, `passport`, `resume`, `wes_report`, `marriage_certificate`, `birth_certificate`, `marital_status`,  `created_at`) VALUES
(1, 'ARISTIDE ', 'MONO', '1', '435455555554', NULL, NULL, '+237894561454', 'Azerbaijan', 'Sulutapa', 'WEAR', '', '87653', '1983-09-06', 'TIBATI', 'Cameroon', 'TEST.PNG', '5445fb-f.pdf', NULL, '420-DS1-TT.pdf', 'rootkey.csv', 1,  '2023-09-18 08:09:30'),
(2, 'CLAUDIA', 'MEDIEMEN', '1', '98934593', NULL, NULL, '785225655', 'Brunei', 'Kuala Balai', '1750 Rue Crevier', '', 'H4L2X5R', '1988-10-10', 'HORISHA', 'Belarus', '420-DS1-TT.pdf', 'épervier1.png', NULL, 'CAIN23-1850578.pdf', '420-SRD-TT.pdf', 1,  '2023-09-18 08:30:28'),
(3, 'NINA FLORALY', 'BADJO', '1', '3443923', 'nina@gmail.com', 'zack.jpg', 'rio', 'Bahrain', 'Madinat `Isa', 'RIO', '', '434454', '1990-12-11', 'brasilia', 'Azerbaijan', 'Formulaire - Consentement à la divulgation de rens', 'TEST.PNG', 'IMM5754_1-SC6JIW1.pdf', 'LetterRecommendationArsene.docx', 'Memoire_5GI_Arsene.pdf',  0,  '2023-09-20 11:50:43');

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
  `enabled` int(1) DEFAULT 0,
  `access_level` enum('admin','consultant','client') DEFAULT 'consultant'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



CREATE TABLE `programs` (
  `id` int(11)  AUTO_INCREMENT  PRIMARY KEY,
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
  ADD UNIQUE KEY `type` (`type`);
COMMIT;

INSERT INTO `programs` (`id`, `name`, `type`, `description`) VALUES
(1, 'Permis de travail', 'WORK_PERMIT', 'Autorisation legale pour travailler au Canada'),
(2, 'Permis detudes', 'STUDY_PERMIT', 'Autorisation legale pour etudier au Canada'),
(3, 'Entree Express', 'EXPRESS_ENTRY', 'Residence permanente'),
(4, 'VISA VISITEUR', 'VISITOR_PERMIT', 'pour visiter un proche vivant au Canada'),
(5, 'Selection province', 'PROVINCIAL_NOMINEE', 'Etre designe par une province');





CREATE TABLE `others` (
  `id` int(11)  AUTO_INCREMENT  PRIMARY KEY,
  `customerId` int(11) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `label` varchar(100) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE quotes (
    id int(11)  AUTO_INCREMENT PRIMARY KEY,
    `email` varchar(255) DEFAULT NULL,
    `phone_number` varchar(100) DEFAULT NULL,
    `programId` int(11) DEFAULT NULL,
    `full_name` varchar(50) DEFAULT NULL,
    `created_at` datetime DEFAULT current_timestamp(),
    `visited` boolean DEFAULT FALSE
);


--
-- Index pour les tables déchargées
--

--
-- Index pour la table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);



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

-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Contraintes pour les tables déchargées
--



ALTER TABLE `folders`
  ADD CONSTRAINT `fk_folders_consultant` FOREIGN KEY (`consultantId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `fk_folders_customer` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `fk_folders_program` FOREIGN KEY (`programId`) REFERENCES `programs` (`id`);


ALTER TABLE `others`
  ADD CONSTRAINT `fk_others_customer` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`);

ALTER TABLE `quotes`
  ADD CONSTRAINT `fk_quotes_program` FOREIGN KEY (`programId`) REFERENCES `programs` (`id`);