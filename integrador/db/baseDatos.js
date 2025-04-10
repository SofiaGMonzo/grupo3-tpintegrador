const baseDatos = {
    usuario: {
        nombre: "Sofia Monzo",
        email: "smonzo@udesa.edu.ar",
        contrasenia: "123456789",
        fechaNacimiento: "17/10/2005",
        domicilio: "Buenos Aires, Pilar",
        imagenPerfil: "/images/users/products/default-image.png"
    },
    productos: [
        {
            id: 1,
            nombre: "Auriculares con cable",
            descripcion: "Auriculares estéreo con micrófono, ideales para videollamadas.",
            precio: 3500,
            categoria: "Audio",
            imagen: "/images/products/auriculares-casco.png",
            comentarios: [
              {
                nombreUsuario: "Juan Pérez",
                texto: "Muy cómodos, excelente calidad de sonido.",
                imagenPerfil: "/images/products/default-image.png"
              },
              {
                nombreUsuario: "Elena Suárez",
                texto: "Los uso para trabajar y son geniales.",
                imagenPerfil: "/images/products/default-image.png"
              }
            ]
          },
          {
            id: 2,
            nombre: "Auriculares inalámbricos",
            descripcion: "Bluetooth 5.0, cancelación de ruido y estuche cargador.",
            precio: 7200,
            categoria: "Audio",
            imagen: "/images/products/auriculares-inalambricos.png",
            comentarios: [
              {
                nombreUsuario: "Lucía Gómez",
                texto: "La batería dura muchísimo.",
                imagenPerfil: "/images/products/default-image.png"
              },
              {
                nombreUsuario: "Carlos Martín",
                texto: "La conexión es muy estable.",
                imagenPerfil: "/images/products/default-image.png"
              }
            ]
          },
          {
            id: 3,
            nombre: "Cámara digital",
            descripcion: "Sensor de alta resolución, ideal para capturar momentos especiales.",
            precio: 28000,
            categoria: "Fotografía",
            imagen: "/images/products/camara-fotos.png",
            comentarios: [
              {
                nombreUsuario: "Valentina Ruiz",
                texto: "Saca fotos espectaculares.",
                imagenPerfil: "/images/products/default-image.png"
              },
              {
                nombreUsuario: "Tomás Ledesma",
                texto: "Compacta y liviana, ideal para viajes.",
                imagenPerfil: "/images/products/default-image.png"
              }
            ]
          },
          {
            id: 4,
            nombre: "Computadora de escritorio",
            descripcion: "Intel i5, 8GB RAM, SSD 240GB.",
            precio: 180000,
            categoria: "Informática",
            imagen: "/images/products/computadora.png",
            comentarios: [
              {
                nombreUsuario: "Nicolás Torres",
                texto: "Va rapidísimo, arranca en segundos.",
                imagenPerfil: "/images/products/default-image.png"
              },
              {
                nombreUsuario: "Ariel Gutierrez",
                texto: "Muy buena para oficina y juegos casuales.",
                imagenPerfil: "/images/products/default-image.png"
              }
            ]
          },
          {
            id: 5,
            nombre: "Monitor LED 24”",
            descripcion: "Resolución Full HD, ideal para trabajo o gaming.",
            precio: 50000,
            categoria: "Informática",
            imagen: "/images/products/monitor.png",
            comentarios: [
              {
                nombreUsuario: "Leandro Ortega",
                texto: "Cumple con todo lo que promete.",
                imagenPerfil: "/images/products/default-image.png"
              },
              {
                nombreUsuario: "Florencia Álvarez",
                texto: "Se ve muy bien, y no cansa la vista.",
                imagenPerfil: "/images/products/default-image.png"
              }
            ]
          },
          {
            id: 6,
            nombre: "Mouse inalámbrico",
            descripcion: "Diseño ergonómico, con batería recargable.",
            precio: 3000,
            categoria: "Accesorios",
            imagen: "/images/products/mouse.png",
            comentarios: [
              {
                nombreUsuario: "Brenda Acosta",
                texto: "Liviano y cómodo, me encanta.",
                imagenPerfil: "/images/products/default-image.png"
              },
              {
                nombreUsuario: "David Salas",
                texto: "Funciona perfecto con mi notebook.",
                imagenPerfil: "/images/products/default-image.png"
              }
            ]
          },
          {
            id: 7,
            nombre: "Tablet 10”",
            descripcion: "Pantalla HD, 4GB RAM, 64GB de almacenamiento.",
            precio: 62000,
            categoria: "Tablets",
            imagen: "/images/products/tablet.png",
            comentarios: [
              {
                nombreUsuario: "Julieta Fernández",
                texto: "Ideal para leer y estudiar.",
                imagenPerfil: "/images/products/default-image.png"
              },
              {
                nombreUsuario: "Gustavo Rey",
                texto: "Muy fluida para ver series o navegar.",
                imagenPerfil: "/images/products/default-image.png"
              }
            ]
          },
          {
            id: 8,
            nombre: "Teclado mecánico RGB",
            descripcion: "Retroiluminado, switches blue, conexión USB.",
            precio: 12000,
            categoria: "Accesorios",
            imagen: "/images/products/teclado.png",
            comentarios: [
              {
                nombreUsuario: "Pedro López",
                texto: "Hace ruido pero se siente genial para escribir.",
                imagenPerfil: "/images/products/default-image.png"
              },
              {
                nombreUsuario: "Rocío Varela",
                texto: "Muy buena calidad y diseño atractivo.",
                imagenPerfil: "/images/products/default-image.png"
              }
            ]
          },
          {
            id: 9,
            nombre: "Set de Realidad Virtual",
            descripcion: "Lentes VR con controladores y sensor de movimiento.",
            precio: 135000,
            categoria: "Gaming",
            imagen: "/images/products/virtual-reality.png",
            comentarios: [
              {
                nombreUsuario: "Sofía Méndez",
                texto: "Una experiencia increíble.",
                imagenPerfil: "/images/products/default-image.png"
              },
              {
                nombreUsuario: "Lucas Romero",
                texto: "¡Inmersión total, muy recomendado!",
                imagenPerfil: "/images/products/default-image.png"
              }
            ]
          },
          {
            id: 10,
            nombre: "Smart TV Samsung 50\"",
            descripcion: "4K UHD, Tizen OS, conectividad WiFi y HDMI.",
            precio: 240000,
            categoria: "TV",
            imagen: "/images/products/img-tv-samsung-smart.png",
            comentarios: [
              {
                nombreUsuario: "Martín Herrera",
                texto: "Perfecto para ver pelis en familia.",
                imagenPerfil: "/images/products/default-image.png"
              },
              {
                nombreUsuario: "Agustina Ríos",
                texto: "Muy buena calidad de imagen y sonido.",
                imagenPerfil: "/images/products/default-image.png"
              }
            ]
          }
        ]
}

module.exports = baseDatos;