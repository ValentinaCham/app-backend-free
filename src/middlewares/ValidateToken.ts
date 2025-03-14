import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import { User } from "../models";

interface TokenRequest extends Request {
    headers: {
        authorization?: string;
    };
    user?: User;
}

const ValidateToken = async (req: TokenRequest, res: Response, next: NextFunction): Promise<void> => {
    const headersToken = req.headers['authorization'];
    console.log(headersToken);

    if (headersToken != undefined && headersToken.startsWith('Bearer')) {
        try {
            const token = headersToken.slice(7);
            jwt.verify(token, process.env.SECRET_KEY || "bq3yQmLCIB4lwCZw63PbiWsJ3aHUtrjHbiuZ74cBZkeIBFMsKu0EJS50ltJjUQxt");
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