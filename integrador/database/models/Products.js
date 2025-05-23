module.exports = function (sequelize, DataTypes) {
    let alias = "Product";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
        usuario_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true 
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true, 
            defaultValue: null 
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true, 
            defaultValue: null 
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true 
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
