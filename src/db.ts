require("dotenv").config();
import { Sequelize } from "sequelize";
import User from "./models/user";

const sequelize: any = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/bustillos7500_site`, {
    logging: false, 
    native: false, 
});

User(sequelize);

const { Users } = sequelize.models;
  


export default sequelize;