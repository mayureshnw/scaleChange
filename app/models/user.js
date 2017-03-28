module.exports = (sequelize, DataTypes) => {
  const Appuser = sequelize.define('appuser', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return Appuser;
};
