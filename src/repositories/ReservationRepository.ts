import Reservation from "../models/Reservation";
import { Op } from "sequelize";

class ReservationRepository {
    async findByUser(userId: number) {
        return await Reservation.findAll({ where: { idUser: userId } });
    }

    async create(reservationData: any) {
        return await Reservation.create(reservationData);
    }

    async findById(id: number) {
        return await Reservation.findByPk(id);
    }

    async cancelReservation(id: number, data: any) {
        return await Reservation.update(data, { where: { id } });
    }
}

export default new ReservationRepository();