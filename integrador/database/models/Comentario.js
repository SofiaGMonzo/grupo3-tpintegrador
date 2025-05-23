module.exports = function (sequelize, dataTypes){
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes//ver
        },
        producto_id: {
            type: dataTypes//ver
        },
        usuario_id: {
            type: dataTypes//ver
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
        paranoid: true
    };


    let Comentario = sequelize.define(alias, cols, config);


    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Product, {
            as: "producto",
            foreignKey: "producto_id",
            timestamps: false
        });
        Comentario.belongsTo(models.User, {
            as: "usuario",
            foreignKey: "usuario_id",
            timestamps: false
        });
    };


    return Comentario;
};
