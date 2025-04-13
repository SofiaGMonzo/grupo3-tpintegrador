CREATE SCHEMA tpIntegradorGrupo3;
USE tpIntegradorGrupo3;

CREATE TABLE usuarios(
		id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(250) NOT NULL UNIQUE,
        contrasenia VARCHAR(500) NOT NULL,
        fechaNAC DATE,
        dni INT NOT NULL UNIQUE,
        foto VARCHAR(300),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        deletedAt  TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);

INSERT INTO usuarios VALUES 
(DEFAULT, 'smonzo@udesa.edu.ar', '123456789', '2005-10-17', 44112233, 'foto.png', NULL, NULL, NULL),
(DEFAULT, 'juanperez@mail.com', 'pass123', '1990-01-10', 20333444, 'foto.png', NULL, NULL, NULL),
(DEFAULT, 'elena.suarez@mail.com', 'clave456', '1988-07-23', 28444555, 'foto.png', NULL, NULL, NULL),
(DEFAULT, 'cmartin@mail.com', 'qwerty789', '1995-04-02', 30555666, 'foto.png', NULL, NULL, NULL),
(DEFAULT, 'valenruiz@mail.com', 'password', '2000-09-14', 33777888, 'foto.png', NULL, NULL, NULL);