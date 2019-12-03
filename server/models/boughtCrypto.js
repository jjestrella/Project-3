module.exports = function (sequelize, DataTypes) {
    var boughtCrypto = sequelize.define("boughtCrypto", {
      crypto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      current_price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      market_cap: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      available_supply: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      total_supply: {
        type: DataTypes.INTEGER,
        allowNull: false
      }, 
      bought_at: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      quantity_bought: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
    } );
  
    boughtCrypto.associate = function (models) {
        boughtCrypto.belongsTo(models.User);
    }
  
    return boughtCrypto;
  };
  