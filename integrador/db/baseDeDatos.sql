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

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT UNSIGNED,
    imagen VARCHAR(250),
    nombre VARCHAR(250) NOT NULL,
    descripcion TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

INSERT INTO productos VALUES
VALUES 
(DEFAULT, 1, '/images/products/1.webp', 'Remera Alphaville - Forever Young', 'Diseño clásico con el logo de \'Forever Young\', ideal para fans de los 80s.'),
(DEFAULT, 1, '/images/products/2.webp', 'Remera Alphaville - Big in Japan', 'Remera negra con gráfico vintage inspirado en el hit \'Big in Japan\'.'),
(DEFAULT, 1, '/images/products/3.webp', 'Remera Alphaville - The Jet Set', 'Estilo moderno con colores vibrantes y tipografía ochentosa.'),
(DEFAULT, 1, '/images/products/4.webp', 'Remera Alphaville - Summer in Berlin', 'Inspirada en los paisajes urbanos de Berlín, ideal para el verano.'),
(DEFAULT, 1, '/images/products/5.webp', 'Remera Alphaville - Dance with Me', 'Remera blanca con tipografía retro y detalles en rojo.'),
(DEFAULT, 1, '/images/products/6.webp', 'Remera Alphaville - Red Rose', 'Diseño minimalista con una rosa roja y letras discretas.'),
(DEFAULT, 1, '/images/products/7.webp', 'Remera Alphaville - Sounds Like a Melody', 'Remera gris con frase del tema y notas musicales sutiles.'),
(DEFAULT, 1, '/images/products/8.webp', 'Remera Alphaville - Afternoons in Utopia', 'Estilo oversize con ilustración inspirada en el álbum.'),
(DEFAULT, 1, '/images/products/9.webp', 'Remera Alphaville - Universal Daddy', 'Diseño negro con tipografía blanca y pequeños gráficos.'),
(DEFAULT, 1, '/images/products/10.webp', 'Remera Alphaville - Heartbreak City', 'Inspirada en los visuales urbanos de la canción, full estilo retro.');

-- CREATE TABLE comentarios ( id INT AUTO_INCREMENT PRIMARY KEY, producto_id INT, usuario_id INT, texto TEXT,createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP, FOREIGN KEY (producto_id) REFERENCES productos(id),FOREIGN KEY (usuario_id) REFERENCES usuarios(id)); -->