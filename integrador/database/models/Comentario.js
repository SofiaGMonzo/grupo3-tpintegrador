
module.exports = function (sequelize, dataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED
        },
        producto_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        usuario_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        texto: {
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

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false,
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

