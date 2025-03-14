import { Request, Response } from "express";
import SpaceService from "../services/SpaceService";

class SpaceController {

    async getSpaces(req: Request, res: Response) {
        try {
            const spaces = await SpaceService.getAllSpaces();
            res.json(spaces);
        } catch (error: any) {
            res.status(500).json({ msg: error.message });
        }
    }

    async getSpaceById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const space = await SpaceService.getSpaceById(id);
            res.json(space);
        } catch (error: any) {
            res.status(404).json({ msg: error.message });
        }
    }
}

export default new SpaceController();