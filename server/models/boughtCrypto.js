module.exports = function (sequelize, DataTypes) {
    var boughtCrypto = sequelize.define("boughtCrypto", {
      crypto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
    } );
  
    boughtCrypto.associate = function (models) {
        boughtCrypto.belongsTo(models.User);
    }
  
    return boughtCrypto;
  };
  