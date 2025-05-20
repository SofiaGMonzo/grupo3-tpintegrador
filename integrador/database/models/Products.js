
module.exports = function (sequelize, dataTypes){
    let alias = "Product";
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
        tableName: "products",
        timestamps: false,
        //underscored: true, //No es necesario si timestamps es false.
    }
    Products.associate = function(models) {
        Products.HasMany(models.User, {
            as: "product",
            through: "user_id",
            foreignKey: "user_id",
            otherKey: "comentario_id", /*ver si esto va */
            timestamps: false
        });
        /*ver si armar de comentarios */
    }
    
    
    let Products = sequelize.define(alias, cols, config);
    return Products;
}
