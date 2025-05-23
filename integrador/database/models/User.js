module.exports = function (sequelize, dataTypes){
    let alias = "User";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },

        email: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        fechaNAC: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING
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
        tableName: "usuarios",
        timestamps: true,
        underscored: false,
        paranoid: true
    };


    let User = sequelize.define(alias, cols, config);


    User.associate = function(models) {
        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "usuario_id",
            timestamps: false
        });
        User.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "usuario_id",
            timestamps: false
        });
    };


    return User;
};


