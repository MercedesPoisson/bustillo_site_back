import server from "./src/app";
import sequelize from "./src/db";


const PORT = 3001;

async function startServer() {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized');

    server.listen(PORT, () => {
      console.log(`Servidor escuchando en puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();