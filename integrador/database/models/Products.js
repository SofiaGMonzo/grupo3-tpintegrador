module.exports = function (sequelize, DataTypes) {
  let alias = "Product";
  let cols = {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    usuario_id: {
      type: DataTypes.INTEGER.UNSIGNED
    },
    imagen: {
      type: DataTypes.STRING
    },
    nombre: {
      type: DataTypes.STRING
    },
    descripcion: {
      type: DataTypes.TEXT
    },
    created_at: {
      type: DataTypes.DATE
    },
    updated_at: {
      type: DataTypes.DATE
    },
    deleted_at: {
      type: DataTypes.DATE
    }
  };

  let config = {
    tableName: "productos",
    timestamps: true,
    underscored: true,
    paranoid: true
  };

  let Product = sequelize.define(alias, cols, config);

  Product.associate = function(models) {
    Product.belongsTo(models.User, {
      as: "usuario",
      foreignKey: "usuario_id"
    });
    Product.hasMany(models.Comentario, {
      as: "comentarios",
      foreignKey: "producto_id"
    });
  };

  return Product;
};




//         })



/* module.exports = function (sequelize, dataTypes){
    let alias = "Product";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER.UNSIGNED
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED
        },
        imagen: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.TEXT
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    };
    /*VER SI NO CONVIENE HACERLO ASI: 
    id: {
      autoIncrement: ,
      primaryKey: ,
      type: 
    },
    title: {
      type: 
    },
    created_at: {
      type: 
    },
    updated_at: {
      type: 
    } 
    user_id(?)  

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: true,
        paranoid: true
    };

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "usuario_id",
            timestamps: false
        });
        Product.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "producto_id",
            timestamps: false
        });
    };

    return Product;
}; */

