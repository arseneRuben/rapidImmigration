drop DATABASE IF EXISTS immigration;
create database immigration ;
use immigration;
-- Création de la table Clients
CREATE TABLE users
(
    id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    lastname VARCHAR
    (100),
    firstname VARCHAR
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
