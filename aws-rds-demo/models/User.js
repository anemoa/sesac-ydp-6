// const {DataTypes} = require('sequelize');

// module.exports = (sequelize) => {
//     return sequelize.define('User', {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         username: {
//             type: DataTypes.STRING,
//             allowNul: false,
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNul: false,
//             unique: true,
//         },
//     });
// };

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });
};