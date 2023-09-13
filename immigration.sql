drop DATABASE IF EXISTS immigration;
create database immigration ;
use immigration;
-- Création de la table Clients
CREATE TABLE users
(
  id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR
  (100),
    first_name VARCHAR
  (100),
    email VARCHAR
  (255) UNIQUE,
    password VARCHAR
  (255),
    profile_image VARCHAR
  (255),
    phone_number  VARCHAR
  (100),
    google_id int,
    gender int,
    access_level ENUM
  ('admin','consultant', 'client') DEFAULT 'client'

    
    -- Autres informations sur le client
);

  INSERT INTO `users` (`
  id`,
  `last_name
  `, `first_name`, `email`, `password`, `profile_image`, `phone_number`, `google_id`, `access_level`) VALUES
  (1, 'FOKAM', 'ARSENE', 'fopoar@gmail.com', '$2b$10$jXujKA2Wnj9JfNI/PXbpl.544rEb4trI3W3msojqQSnncGeaj7xOK', NULL, NULL, NULL, 'admin'),
  (2, NULL, NULL, 'ruben@gmail.com', '$2b$10$0Bsy0JXgxlkzvoQ4zZEfxeFBjPQZ.ygynQOHlFimHI5gcTcM8r4Ti', NULL, NULL, NULL, 'consultant'),
  (3, NULL, NULL, 'aminebenhassine@gmail.com', '$2b$10$DEyeZ3xp2xGQ98OsNmu4leSkBDWPNMW.0jahEmoWpgV5mCcdLV0/G', NULL, NULL, NULL, 'client'),
  (4, 'OUABE', 'ALAIN', 'fopoar4@gmail.com', '$2b$10$118weumuFCC8AG4FSTDrKupAe19Zn//zCiB5PxxIkD7wLVtBr7de.', NULL, NULL, NULL, 'client');




  CREATE TABLE `client_folders`
  (`id` int
  (11) NOT NULL,
  `foler_name` varchar
  (100) DEFAULT NULL,
  `foler_path` varchar
  (255) DEFAULT NULL,
  `consultant_id` int
  (11) DEFAULT NULL,
  `current_step` varchar
  (100) DEFAULT 'CREATED',
  `statut` int
  (11) DEFAULT 0,
  `first_name` varchar
  (50) DEFAULT NULL,
  `last_name` varchar
  (50) DEFAULT NULL,
  `gender` varchar
  (50) DEFAULT NULL,
  `passport_number` varchar
  (50) DEFAULT NULL,
  `email` varchar
  (50) DEFAULT NULL,
  `profile_image` varchar
  (50) DEFAULT NULL,
  `phone_number` varchar
  (50) DEFAULT NULL,
  `country` varchar
  (50) DEFAULT NULL,
  `city` varchar
  (50) DEFAULT NULL,
  `street` varchar
  (50) DEFAULT NULL,
  `address` varchar
  (50) DEFAULT NULL,
  `zip_code` varchar
  (10) DEFAULT NULL,
  `birth_date` varchar
  (50) DEFAULT NULL,
  `birth_place` varchar
  (50) DEFAULT NULL,
  `birth_country` varchar
  (50) DEFAULT NULL,
  `passport` varchar
  (50) DEFAULT NULL,
  `resume` varchar
  (50) DEFAULT NULL,
  `wes_report` varchar
  (50) DEFAULT NULL,
  `marriage_certificate` varchar
  (50) DEFAULT NULL,
  `birth_certificate` varchar
  (50) DEFAULT NULL,
  `other_documents` varchar
  (50) DEFAULT NULL,
  `marital_status` int
  (11) DEFAULT NULL,
  `spouse_name` varchar
  (50) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp
  (),
  `updated_at` datetime DEFAULT NULL ON
  UPDATE current_timestamp()
) ENGINE
  =InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

  --
  -- Index pour les tables déchargées
  --

  --
  -- Index pour la table `client_folders`
  --
  ALTER TABLE `client_folders`
  ADD PRIMARY KEY
  (`id`);

  --
  -- AUTO_INCREMENT pour les tables déchargées
  --

  --
  -- AUTO_INCREMENT pour la table `client_folders`
  --
  ALTER TABLE `client_folders`
  MODIFY `id` int
  (11) NOT NULL AUTO_INCREMENT;
  COMMIT;

  -- Création de la table Commentaires
  CREATE TABLE comments
  (
    id INT
    AUTO_INCREMENT PRIMARY KEY,
    folder_id INT,
    author_id INT,
    content TEXT,
    created_at DATETIME,
    -- Autres informations sur le commentaire
    FOREIGN KEY
    (folder_id) REFERENCES client_folders
    (id),
    FOREIGN KEY
    (author_id) REFERENCES users
    (id) -- Ou Consultants(ID)
);

    -- Création de la table Taches
    CREATE TABLE tasks
    (
      id INT
      AUTO_INCREMENT PRIMARY KEY,
    folder_id INT,
    consultant_id INT,
    description TEXT,
    due_date DATETIME,
    Statut ENUM
      ('En attente', 'En cours', 'Terminee'),
    -- Autres informations sur la tâche
    FOREIGN KEY
      (folder_id) REFERENCES client_folders
      (id),
    FOREIGN KEY
      (consultant_id) REFERENCES users
      (id)
);
