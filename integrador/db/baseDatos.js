const baseDatos = {
    usuario: {
        nombre: "Sofia Monzo",
        email: "smonzo@udesa.edu.ar",
        contrasenia: "123456789",
        fechaNacimiento: "17/10/2005",
        domicilio: "Buenos Aires, Pilar",
        imagenPerfil: "/images/users/fotoPerfil.jpg",
    },
    productos: [
      {
        id: 1,
        nombre: "Remera Alphaville - Forever Young",
        descripcion: "Diseño clásico con el logo de 'Forever Young', ideal para fans de los 80s.",
        precio: 8500,
        categoria: "Ropa",
        imagen: "/images/products/1.webp",
        comentarios: [
          {
            nombreUsuario: "Juan Pérez",
            texto: "Excelente calidad de algodón, me encantó el diseño.",
            imagenPerfil: "/images/users/images.jpeg"
          },
          {
            nombreUsuario: "Elena Suárez",
            texto: "La estampa se mantiene perfecta después de varios lavados.",
            imagenPerfil: "/images/users/2.jpeg"
          },
          {
            nombreUsuario: "Maria Suárez",
            texto: "La estampa se mantiene perfecta después de varios lavados.",
            imagenPerfil: "/images/users/2.jpeg"
          }
        ]
      },
      {
        id: 2,
        nombre: "Remera Alphaville - Big in Japan",
        descripcion: "Remera negra con gráfico vintage inspirado en el hit 'Big in Japan'.",
        precio: 8900,
        categoria: "Ropa",
        imagen: "/images/products/2.webp",
        comentarios: [
          {
            nombreUsuario: "Lucía Gómez",
            texto: "Súper cómoda y con muy buen calce.",
            imagenPerfil: "/images/users/2.jpeg"
          },
          {
            nombreUsuario: "Carlos Martín",
            texto: "Ideal para regalar, mi novia la amó.",
            imagenPerfil: "/images/users/images.jpeg"
          },
          {
            nombreUsuario: "Carlos Pereyra",
            texto: "Ideal para regalar, mi novia la amó.",
            imagenPerfil: "/images/users/images.jpeg"
          }
        ]
      },
      {
        id: 3,
        nombre: "Remera Alphaville - The Jet Set",
        descripcion: "Estilo moderno con colores vibrantes y tipografía ochentosa.",
        precio: 9100,
        categoria: "Ropa",
        imagen: "/images/products/3.webp",
        comentarios: [
          {
            nombreUsuario: "Valentina Ruiz",
            texto: "Me encanta cómo se siente la tela, súper suave.",
            imagenPerfil: "/images/users/2.jpeg"
          },
          {
            nombreUsuario: "Tomás Ledesma",
            texto: "La uso para salir, todos me preguntan dónde la compré.",
            imagenPerfil: "/images/users/images.jpeg"
          },
          {
            nombreUsuario: "Tomás Gomez",
            texto: "La uso para salir, todos me preguntan dónde la compré.",
            imagenPerfil: "/images/users/images.jpeg"
          }
        ]
      },
      {
        id: 4,
        nombre: "Remera Alphaville - Summer in Berlin",
        descripcion: "Inspirada en los paisajes urbanos de Berlín, ideal para el verano.",
        precio: 8700,
        categoria: "Ropa",
        imagen: "/images/products/4.webp",
        comentarios: [
          {
            nombreUsuario: "Nicolás Torres",
            texto: "Liviana y fresca, ideal para días calurosos.",
            imagenPerfil: "/images/users/images.jpeg"
          },
          {
            nombreUsuario: "Ariel Gutierrez",
            texto: "Hermoso diseño y colores brillantes.",
            imagenPerfil: "/images/users/images.jpeg"
          },
          {
            nombreUsuario: "Nicolás Gardel",
            texto: "Liviana y fresca, ideal para días calurosos.",
            imagenPerfil: "/images/users/images.jpeg"
          }
        ]
      },
      {
        id: 5,
        nombre: "Remera Alphaville - Dance with Me",
        descripcion: "Remera blanca con tipografía retro y detalles en rojo.",
        precio: 8800,
        categoria: "Ropa",
        imagen: "/images/products/5.webp",
        comentarios: [
          {
            nombreUsuario: "Leandro Ortega",
            texto: "Combinable con todo. La uso un montón.",
            imagenPerfil: "/images/users/images.jpeg"
          },
          {
            nombreUsuario: "Florencia Álvarez",
            texto: "Me encanta, tiene un estilo súper único.",
            imagenPerfil: "/images/users/2.jpeg"
          },
          {
            nombreUsuario: "Juan Ignacio Premoli",
            texto: "Me encanta, tiene un estilo súper único.",
            imagenPerfil: "/images/users/2.jpeg"
          }
        ]
      },
      {
        id: 6,
        nombre: "Remera Alphaville - Red Rose",
        descripcion: "Diseño minimalista con una rosa roja y letras discretas.",
        precio: 9200,
        categoria: "Ropa",
        imagen: "/images/products/6.webp",
        comentarios: [
          {
            nombreUsuario: "Brenda Acosta",
            texto: "La imagen de la rosa es hermosa, delicada pero llamativa.",
            imagenPerfil: "/images/users/2.jpeg"
          },
          {
            nombreUsuario: "David Salas",
            texto: "Queda re bien con jeans o pantalones claros.",
            imagenPerfil: "/images/users/images.jpeg"
          },
          {
            nombreUsuario: "Juan Perez",
            texto: "Queda re bien con jeans o pantalones claros.",
            imagenPerfil: "/images/users/images.jpeg"
          }
        ]
      },
      {
        id: 7,
        nombre: "Remera Alphaville - Sounds Like a Melody",
        descripcion: "Remera gris con frase del tema y notas musicales sutiles.",
        precio: 9400,
        categoria: "Ropa",
        imagen: "/images/products/7.webp",
        comentarios: [
          {
            nombreUsuario: "Julieta Fernández",
            texto: "Ideal para los que amamos la música de los 80.",
            imagenPerfil: "/images/users/2.jpeg"
          },
          {
            nombreUsuario: "Gustavo Rey",
            texto: "Muy buena calidad y no se encoge.",
            imagenPerfil: "/images/users/images.jpeg"
          },
          {
            nombreUsuario: "Gustavo Muñoz",
            texto: "Muy buena calidad y no se encoge.",
            imagenPerfil: "/images/users/images.jpeg"
          }
        ]
      },
      {
        id: 8,
        nombre: "Remera Alphaville - Afternoons in Utopia",
        descripcion: "Estilo oversize con ilustración inspirada en el álbum.",
        precio: 9700,
        categoria: "Ropa",
        imagen: "/images/products/8.webp",
        comentarios: [
          {
            nombreUsuario: "Pedro López",
            texto: "Me encanta la onda que tiene, súper original.",
            imagenPerfil: "/images/users/images.jpeg"
          },
          {
            nombreUsuario: "Rocío Varela",
            texto: "Es cómoda y la tela es gruesita, muy buena.",
            imagenPerfil: "/images/users/2.jpeg"
          },
          {
            nombreUsuario: "Rocío Magnin",
            texto: "Es cómoda y la tela es gruesita, muy buena.",
            imagenPerfil: "/images/users/2.jpeg"
          }
        ]
      },
      {
        id: 9,
        nombre: "Remera Alphaville - Universal Daddy",
        descripcion: "Diseño negro con tipografía blanca y pequeños gráficos.",
        precio: 8600,
        categoria: "Ropa",
        imagen: "/images/products/9.webp",
        comentarios: [
          {
            nombreUsuario: "Sofía Méndez",
            texto: "¡Amo Alphaville! Esta remera es un must.",
            imagenPerfil: "/images/users/2.jpeg"
          },
          {
            nombreUsuario: "Lucas Romero",
            texto: "Ya me compré otra del mismo estilo, 10/10.",
            imagenPerfil: "/images/users/images.jpeg"
          },
          {
            nombreUsuario: "Lucas Monzo",
            texto: "Ya me compré otra del mismo estilo, 10/10.",
            imagenPerfil: "/images/users/images.jpeg"
          }
        ]
      },
      {
        id: 10,
        nombre: "Remera Alphaville - Heartbreak City",
        descripcion: "Inspirada en los visuales urbanos de la canción, full estilo retro.",
        precio: 9300,
        categoria: "Ropa",
        imagen: "/images/products/10.webp",
        comentarios: [
          {
            nombreUsuario: "Martín Herrera",
            texto: "¡Muy buena! Se nota que es producto oficial.",
            imagenPerfil: "/images/users/images.jpeg"
          },
          {
            nombreUsuario: "Agustina Ríos",
            texto: "Hermosa y muy original, la volvería a comprar.",
            imagenPerfil: "/images/users/2.jpeg"
          },
          {
            nombreUsuario: "Agustina Diaz",
            texto: "Hermosa y muy original, la volvería a comprar.",
            imagenPerfil: "/images/users/2.jpeg"
          }
        ]
      }
    ], 
    filtrarId: function (idBuscado) {
      const idEncontrado = []
      for (let i = 0; i < this.productos.length; i++) {
          const element = this.productos[i];
          if (element.id == idBuscado) {
              idEncontrado.push(element)
          }       
      }
      return idEncontrado;
    }
    
}

module.exports = baseDatos;