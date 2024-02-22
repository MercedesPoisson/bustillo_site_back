import { DataTypes, Model, Sequelize } from "sequelize";
import { UserAttributes } from "./interfaces";

interface UserInstance extends Model<UserAttributes>, UserAttributes { }

const User = (sequelize: Sequelize) => {
    sequelize.define<UserInstance>('Users', {
        id_user:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        country_code: {
            type: DataTypes.STRING(5),
            allowNull: true
          },
          phone: {
            type: DataTypes.STRING(20),
            allowNull: true
          },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: true
          },          
          registration_date: {
            type: DataTypes.DATE,
            allowNull: true
          },
          user_type: {
            type: DataTypes.STRING(10),
            allowNull: true
          }
    })
}

export default User;
