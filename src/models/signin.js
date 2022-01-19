export default (Sequelize, DataTypes) => {
    const Signin = Sequelize.define(
        'signin', {
            id: {
                type: DataTypes.INTEGER,
                unique: true,
                primaryKey: true,
                autoIncrement: true,
            },
            UserName: DataTypes.STRING,
            Password: DataTypes.STRING,
            LoginOn: DataTypes.STRING,

        }, {
            timestamp: true,
            freezeTableName: true,
        },
    );
    return Signin
}