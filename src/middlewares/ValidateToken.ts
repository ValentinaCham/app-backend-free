import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken'
import { AuthenticatedRequest } from "../config/AuthenticatedRequest";

const ValidateToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    const headersToken = req.headers['authorization'];
    console.log(headersToken);

    if (headersToken != undefined && headersToken.startsWith('Bearer')) {
        try {
            const token = headersToken.slice(7);
            const decoded = jwt.verify(token, process.env.SECRET_KEY || "bq3yQmLCIB4lwCZw63PbiWsJ3aHUtrjHbiuZ74cBZkeIBFMsKu0EJS50ltJjUQxt") as { id: number };
            req.userId = decoded.id;
            next();
        } catch (error) {
            res.status(401).json({
                msg: "Token inválido o expirado."
            });
        }
    } else {
        res.status(401).json({
            msg: "Acceso denegado. Token no proporcionado o incorrecto."
        });
    }
};

export default ValidateToken