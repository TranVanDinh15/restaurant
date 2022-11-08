'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        // orderId: DataTypes.INTEGER,
        // foodId: DataTypes.INTEGER,
        // quantity: DataTypes.STRING,
        // totalAmount: DataTypes.INTEGER,
        await queryInterface.createTable('OrderDetails', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            orderId: {
                type: Sequelize.INTEGER
            },
            foodId: {
                type: Sequelize.INTEGER
            },
            quantity: {
                type: Sequelize.STRING
            },
            totalAmount: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('OrderDetails');
    }
};