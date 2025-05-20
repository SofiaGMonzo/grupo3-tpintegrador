module.exports = function (sequelize, dataTypes){
    let alias = "User";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        title: {
            type : dataTypes.STRING
        },
        created_at: {
	        type: dataTypes.DATE
        },
        updated_at: {
	        type: dataTypes.DATE
        },
  	}
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
        tableName: "User",
        timestamps: false,
        //underscored: true, //No es necesario si timestamps es false.
    }
    User.associate = function(models) {
        User.BelongsTo(models.product, {
            as: "product",
            through: "product_id",
            foreignKey: "product_id",
            otherKey: "comentario_id", /*ver si esto va */
            timestamps: false
        });
        /*ver si armar de comentarios */
    }
    
    
    let User = sequelize.define(alias, cols, config);
    return User;
}