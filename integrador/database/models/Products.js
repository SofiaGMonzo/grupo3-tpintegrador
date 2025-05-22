module.exports = function (sequelize, dataTypes){
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
    user_id(?)  */

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
};

