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
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
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
(DEFAULT, 1, '/images/products/1.webp', 'Remera Alphaville - Forever Young', 'Diseño clásico con el logo de \Forever Young\, ideal para fans de los 80s.',null, null, null),
(DEFAULT, 1, '/images/products/2.webp', 'Remera Alphaville - Big in Japan', 'Remera negra con gráfico vintage inspirado en el hit \Big in Japan\.',null, null, null),
(DEFAULT, 1, '/images/products/3.webp', 'Remera Alphaville - The Jet Set', 'Estilo moderno con colores vibrantes y tipografía ochentosa.',null, null, null),
(DEFAULT, 1, '/images/products/4.webp', 'Remera Alphaville - Summer in Berlin', 'Inspirada en los paisajes urbanos de Berlín, ideal para el verano.',null, null, null),
(DEFAULT, 1, '/images/products/5.webp', 'Remera Alphaville - Dance with Me', 'Remera blanca con tipografía retro y detalles en rojo.',null, null, null),
(DEFAULT, 1, '/images/products/6.webp', 'Remera Alphaville - Red Rose', 'Diseño minimalista con una rosa roja y letras discretas.',null, null, null),
(DEFAULT, 1, '/images/products/7.webp', 'Remera Alphaville - Sounds Like a Melody', 'Remera gris con frase del tema y notas musicales sutiles.',null, null, null),
(DEFAULT, 1, '/images/products/8.webp', 'Remera Alphaville - Afternoons in Utopia', 'Estilo oversize con ilustración inspirada en el álbum.',null, null, null),
(DEFAULT, 1, '/images/products/10.webp', 'Remera Alphaville - Heartbreak City', 'Inspirada en los visuales urbanos de la canción, full estilo retro.',null, null, null);

CREATE TABLE comentarios
( id INT AUTO_INCREMENT PRIMARY KEY,
 producto_id INT UNSIGNED,
 usuario_id INT UNSIGNED,
 texto TEXT,
 createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
 FOREIGN KEY (producto_id) REFERENCES productos(id),
 FOREIGN KEY (usuario_id) REFERENCES usuarios(id));

INSERT INTO comentarios VALUES
(DEFAULT, 1, 1, 'Excelente calidad de algodón, me encantó el diseño.', null, null, null),
(DEFAULT,1, 2, 'La estampa se mantiene perfecta después de varios lavados.', null, null, null),
(DEFAULT,2, 3, 'Súper cómoda y con muy buen calce.', null, null, null),
(DEFAULT,2, 4, 'Ideal para regalar, mi novia la amó.', null, null, null),
(DEFAULT, 3, 5, 'Me encanta cómo se siente la tela, súper suave.', NULL, NULL, NULL),
(DEFAULT,3, 2, 'La uso para salir, todos me preguntan dónde la compré.', null, null, null),
(DEFAULT,4, 1, 'Liviana y fresca, ideal para días calurosos.', null, null, null),
(DEFAULT,5, 3, 'Combinable con todo. La uso un montón.', null, null, null),
(DEFAULT,5, 1, 'Me encanta, tiene un estilo súper único.', null, null, null),
(DEFAULT,6, 4, 'La imagen de la rosa es hermosa, delicada pero llamativa.', null, null, null),
(DEFAULT,6, 2, 'Queda re bien con jeans o pantalones claros.', null, null, null),
(DEFAULT,7, 3, 'Ideal para los que amamos la música de los 80.', null, null, null),
(DEFAULT,7, 4, 'Muy buena calidad y no se encoge.', null, null, null),
(DEFAULT,8, 5, 'Me encanta la onda que tiene, súper original.', null, null, null),
(DEFAULT,8, 2, 'Es cómoda y la tela es gruesita, muy buena.', null, null, null),
(DEFAULT,9, 4, '¡Amo Alphaville! Esta remera es un must.', null, null, null),
(DEFAULT,9, 1, 'Ya me compré otra del mismo estilo, 10/10.', null, null, null),
(DEFAULT,1, 2, '¡Muy buena! Se nota que es producto oficial.', null, null, null),
(DEFAULT,2, 3, 'Hermosa y muy original, la volvería a comprar.', null, null, null);
