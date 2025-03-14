import { Router } from "express";
import ReservationController from "../controllers/ReservationController";
import ValidateToken from "../middlewares/ValidateToken"; // Middleware para autenticación
import ValidateUserId from "../middlewares/ValidateUserId"; // Middleware para autenticación

const router = Router();

router.get("/reservations", ValidateToken, ReservationController.getReservations);
router.post("/reservations", ValidateToken, ValidateUserId, ReservationController.createReservation);
router.delete("/reservations/:id", ValidateToken, ValidateUserId, ReservationController.cancelReservation);

export default router;