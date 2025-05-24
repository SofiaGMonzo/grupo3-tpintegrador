
module.exports = function (sequelize, DataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
        producto_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        usuario_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        texto: {
            type: DataTypes.TEXT
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    };

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false,
        paranoid: true
    };

    let Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Product, {
            as: "producto",
            foreignKey: "producto_id"
        });
        Comentario.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "usuario_id"
        });
    };

    return Comentario;
};

