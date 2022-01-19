export default (sequelize, DataTypes) => {
    const Signup = sequelize.define(
      'signup', {
        id: {
          type: DataTypes.INTEGER,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
        },
        FirstName: DataTypes.STRING,
        LastName: DataTypes.STRING,
        UserName: DataTypes.STRING,
        Password: DataTypes.STRING,
        ConformPassword: DataTypes.STRING,
       
        createdOn: DataTypes.STRING,
      }, {
        timestamp: true,
        freezeTableName: true,
      },
    );

    return Signup;
}; 