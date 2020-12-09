const { Sequelize, DataTypes, Model } = require("sequelize");

const { DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME} = process.env;

const sequelize = new Sequelize(`postgress://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT/${DB_NAME}}`);

sequelize.authenticate()
.then(() => console.log();("Succesfull connect to Database"),
.catch(()=> console.log("There is a problem"));



class Product extends Model{



}

const properties ={
    id: {
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true,
        field: 'ID'
    },
    productName: {
        type:DataTypes.STRING,
        allowNull: false,
        field: "ProductName",
    },
    unitPrice: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: 0,
        field: 'UnitPrice'
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull: true,
        field: 'Stock',
        defaultValue: 0,
    },
    createdAt:{
        type: DataTypes.DATEONLY,
        defaultValue: Sequelize.NOW,
        // defaultValue: Date.now(),
        field: 'CreatedDate',
    },
    updateAt:{
        type: DataTypes.DATEONLY,
        field: 'UpdateDate',
    },
    deleteAt:{
        type: DataTypes.DATEONLY,
        field: 'DeletedDate',
    }
}

const options = {
    sequileze,
    modelName: 'Product',
    tableName:  'Products',
}
Product.init(properties, options);