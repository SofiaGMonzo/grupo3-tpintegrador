module.exports = function (sequelize, DataTypes) {
    let alias = "User";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING
        },
        username: {
            type: DataTypes.STRING
        },
        contrasenia: {
            type: DataTypes.STRING
        },
        fechaNAC: {
            type: DataTypes.DATE
        },
        dni: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false
        },
        foto: {
            type: DataTypes.STRING
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
        tableName: "usuarios",
        timestamps: true,
        underscored: false,
        paranoid: true
    };

    let User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "usuario_id"
        });
        User.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "usuario_id"
        });
    };

    return User;
};

