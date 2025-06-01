module.exports = function (sequelize, dataTypes) {
    let alias = "Product";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED,
       
        },
        imagen: {
            type: dataTypes.STRING,
        
        },
        nombre: {
            type: dataTypes.STRING,
          
        },
        descripcion: {
            type: dataTypes.TEXT,
            
        },
        createdAt: {
            type: dataTypes.DATE,
            defaultValue: null
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
    
        }
    };


    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false,
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
