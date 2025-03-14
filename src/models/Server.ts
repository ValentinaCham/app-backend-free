import express, { Application } from "express";
import { sequelize } from "../models";
import UserRoutes from "../routes/UserRoutes";
import SpaceRoutes from "../routes/SpaceRoutes";
import ReservationRoutes from "../routes/ReservationRoutes";
import cors from "cors";
import { seedDatabase } from "../database/seed";

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "3000";
        this.listen();
        this.middlewares();
        this.router();  
        this.DBConnection();
    }

    listen(){
        this.app.listen(this.port, () => {
        console.log("This execute from port: "+ this.port);
        });
    }

    router(){
        this.app.use(UserRoutes);
        this.app.use(SpaceRoutes);
        this.app.use(ReservationRoutes);
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors())
    }

    async DBConnection(){
        try {
            console.log("Connecting to database...");
            //Ajuste automático de la base de datos
            await sequelize.sync({alter: false});
            //await sequelize.sync({force: true});
            //await sequelize.authenticate();
            console.log("Connection has been established successfully.");
            //Precarga de datos
            await seedDatabase();
            console.log("Data loaded successfully.");
        } catch (error) {
            console.log(error);
        }
    }
}

export default Server;