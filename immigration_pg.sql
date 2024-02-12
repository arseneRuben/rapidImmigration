DROP DATABASE IF EXISTS dbruswel;
CREATE DATABASE dbruswel ;


DROP TABLE IF EXISTS customers;
CREATE TABLE IF NOT EXISTS customers (
  id SERIAL   PRIMARY KEY,
  first_name varchar(50) DEFAULT NULL,
  last_name varchar(50) DEFAULT NULL,
  gender varchar(50) DEFAULT NULL,
  passport_number varchar(50) DEFAULT NULL,
  email varchar(50) DEFAULT NULL,
  profile_image varchar(50) DEFAULT NULL,
  phone_number varchar(50) DEFAULT NULL,
  country varchar(50) DEFAULT NULL,
  city varchar(50) DEFAULT NULL,
  street varchar(50) DEFAULT NULL,
  address varchar(50) DEFAULT NULL,
  zip_code varchar(10) DEFAULT NULL,
  birth_date varchar(50) DEFAULT NULL,
  birth_place varchar(50) DEFAULT NULL,
  birth_country varchar(50) DEFAULT NULL,
  passport varchar(50) DEFAULT NULL,
  resume varchar(50) DEFAULT NULL,
  wes_report varchar(50) DEFAULT NULL,
  marriage_certificate varchar(50) DEFAULT NULL,
  birth_certificate varchar(50) DEFAULT NULL,
  marital_status int DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(id)


);

--CREATE TYPE IF NOT EXISTS level  AS ENUM ('admin','consultant','client');

DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  id SERIAL   PRIMARY KEY,
  last_name varchar(100) DEFAULT NULL,
  first_name varchar(100) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  password varchar(255) DEFAULT NULL,
  profile_image varchar(255) DEFAULT NULL,
  phone_number varchar(100) DEFAULT NULL,
  google_id int DEFAULT NULL,
  gender int DEFAULT NULL,
  enabled int DEFAULT 0,
  access_level level DEFAULT 'consultant',
  UNIQUE(email),
  UNIQUE(id)


);
DROP TABLE IF EXISTS programs;
CREATE TABLE IF NOT EXISTS programs (
  id SERIAL   PRIMARY KEY,
  name varchar(200) DEFAULT NULL,
  type varchar(100) DEFAULT NULL,
  description varchar(255) DEFAULT NULL,
  UNIQUE(id),
  UNIQUE(type)
);

DROP TABLE IF EXISTS others;
CREATE TABLE IF NOT EXISTS others (
  id SERIAL  PRIMARY KEY,
  customerId int  DEFAULT NULL,
  type varchar(100) DEFAULT NULL,
  label varchar(100) DEFAULT NULL,
  value varchar(255) DEFAULT NULL,
  UNIQUE(id),
  CONSTRAINT fk_others_customer FOREIGN KEY(customerId)  REFERENCES customers(id)


) ;

DROP TABLE IF EXISTS quotes;
CREATE TABLE IF NOT EXISTS quotes (
    id SERIAL PRIMARY KEY,
    email varchar(255) DEFAULT NULL,
    phone_number varchar(100) DEFAULT NULL,
    programId int DEFAULT NULL,
    full_name varchar(50) DEFAULT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    visited boolean DEFAULT FALSE,
    UNIQUE(id),
    CONSTRAINT fk_quotes_program FOREIGN KEY(programId)  REFERENCES programs(id)
);
DROP TABLE folders;
CREATE TABLE IF NOT EXISTS folders (
  id SERIAL   PRIMARY KEY,
  folderNumber int NOT NULL,
  currentStep varchar(100) DEFAULT 'CREATED',
  consultantId int DEFAULT NULL,
  customerId int DEFAULT NULL,
  programId int DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  lastVisit TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  comments varchar(255) ,
  UNIQUE(id),
  CONSTRAINT fk_folders_consultant FOREIGN KEY(consultantId)  REFERENCES users(id),
  CONSTRAINT fk_folders_customer FOREIGN KEY(customerId)  REFERENCES customers(id),
  CONSTRAINT fk_folders_program FOREIGN KEY(programId)  REFERENCES programs(id)
);

INSERT INTO programs (id, name, type, description) VALUES
(1, 'Permis de travail', 'WORK_PERMIT', 'Autorisation legale pour travailler au Canada'),
(2, 'Permis detudes', 'STUDY_PERMIT', 'Autorisation legale pour etudier au Canada'),
(3, 'Entree Express', 'EXPRESS_ENTRY', 'Residence permanente'),
(4, 'VISA VISITEUR', 'VISITOR_PERMIT', 'pour visiter un proche vivant au Canada'),
(5, 'Selection province', 'PROVINCIAL_NOMINEE', 'Etre designe par une province');

INSERT INTO customers (id,   first_name, last_name, gender, passport_number, email, profile_image, phone_number, country, city, street, address, zip_code, birth_date, birth_place, birth_country, passport, resume, wes_report, marriage_certificate, birth_certificate, marital_status) VALUES
(1, 'ARISTIDE ', 'MONO', '1', '435455555554', NULL, NULL, '+237894561454', 'Azerbaijan', 'Sulutapa', 'WEAR', '', '87653', '1983-09-06', 'TIBATI', 'Cameroon', 'TEST.PNG', '5445fb-f.pdf', NULL, '420-DS1-TT.pdf', 'rootkey.csv', 1),
(2, 'CLAUDIA', 'MEDIEMEN', '1', '98934593', NULL, NULL, '785225655', 'Brunei', 'Kuala Balai', '1750 Rue Crevier', '', 'H4L2X5R', '1988-10-10', 'HORISHA', 'Belarus', '420-DS1-TT.pdf', 'épervier1.png', NULL, 'CAIN23-1850578.pdf', '420-SRD-TT.pdf', 1),
(3, 'NINA FLORALY', 'BADJO', '1', '3443923', 'nina@gmail.com', 'zack.jpg', 'rio', 'Bahrain', 'Madinat Isa', 'RIO', '', '434454', '1990-12-11', 'brasilia', 'Azerbaijan', 'Formulaire - Consentement à la divulgation de rens', 'TEST.PNG', 'IMM5754_1-SC6JIW1.pdf', 'LetterRecommendationArsene.docx', 'Memoire_5GI_Arsene.pdf',  0);
