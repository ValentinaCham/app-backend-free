import { Router } from "express";
import SpaceController from "../controllers/SpaceController";

const router = Router();

router.get("/spaces", SpaceController.getSpaces);
router.get("/spaces/:id", SpaceController.getSpaceById);

export default router;

