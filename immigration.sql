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



    -- Création de la table Dossiers
    CREATE TABLE client_folders
    (
        id INT
        AUTO_INCREMENT PRIMARY KEY,
         foler_name VARCHAR
        (100),
         foler_path VARCHAR
        (255),
    client_id INT,
    consultant_id INT,
    current_step VARCHAR
        (100),
    statut VARCHAR
        (50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON
        UPDATE CURRENT_TIMESTAMP,
    -- Autres informations sur le dossier
    FOREIGN KEY
        (client_id) REFERENCES users
        (id),
    FOREIGN KEY
        (consultant_id) REFERENCES users
        (id)
);

        -- Création de la table Documents
        CREATE TABLE documents
        (
            id INT
            AUTO_INCREMENT PRIMARY KEY,
    folder_id INT,
    file_name VARCHAR
            (255),
    path VARCHAR
            (255),
    created_at DATETIME,
    -- Autres informations sur le document
    FOREIGN KEY
            (folder_id) REFERENCES client_folders
            (id)
);

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
