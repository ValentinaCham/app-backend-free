import { NextFunction, Response } from "express";
import { AuthenticatedRequest } from "../config/AuthenticatedRequest";

const ValidateUserId = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
    if (!req.userId || req.userId !== req.body.idUser) {
        res.status(403).json({ msg: "No autorizado. ID de usuario no coincide." });
    } else {
        next();
    }
};

export default ValidateUserId;