require("dotenv").config();
import { Sequelize } from "sequelize";

const sequelize: any = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/bustillos7500_site`, {
    logging: false, 
    native: false, 
});
  


export default sequelize;