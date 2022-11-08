'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OrderDetails extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    OrderDetails.init({
        orderId: DataTypes.INTEGER,
        foodId: DataTypes.INTEGER,
        quantity: DataTypes.STRING,
        totalAmount: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'OrderDetails',
    });
    return OrderDetails;
};