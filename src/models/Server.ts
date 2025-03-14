import express, { Application } from "express";
import { sequelize } from "../models";
import UserRoutes from "../routes/UserRoutes";
import cors from "cors";

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
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors())
    }

    async DBConnection(){
        try {
            console.log("Connecting to database...");
            //Ajuste automático de la base de datos
            await sequelize.sync({alter: true});
            //await sequelize.authenticate();
            console.log("Connection has been established successfully.");
        } catch (error) {
            console.log(error);
        }
    }
}

export default Server;