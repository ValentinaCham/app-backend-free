import { Request, Response } from "express";
import ReservationService from "../services/ReservationService";
import { AuthenticatedRequest } from "../config/AuthenticatedRequest";

class ReservationController {
    async getReservations(req: AuthenticatedRequest, res: Response) {
        try {
            const userId = req.userId!;
            const reservations = await ReservationService.getUserReservations(userId);
            res.json(reservations);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async createReservation(req: AuthenticatedRequest, res: Response) {
        try {
            const reservation = await ReservationService.createReservation(req.body);
            res.status(201).json(reservation);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async cancelReservation(req: AuthenticatedRequest, res: Response) {
        try {
            const { id } = req.params;
            const { reasonCancel } = req.body;
            const userId = req.userId!;

            await ReservationService.cancelReservation(parseInt(id), userId, reasonCancel);
            res.json({ message: "Reservation canceled successfully" });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new ReservationController();
