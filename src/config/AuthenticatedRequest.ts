import { Request } from "express";

export interface AuthenticatedRequest extends Request {
    headers: {
        authorization?: string;
    };
    userId?: number
}

