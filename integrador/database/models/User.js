module.exports = function (sequelize, dataTypes){
    let alias = "User";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes//ver
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
    /*VER SI NO CONVIENE PONER ASI:
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
  }; */

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: true, 
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
