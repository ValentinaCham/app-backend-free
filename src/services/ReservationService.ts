import ReservationRepository from "../repositories/ReservationRepository";

class ReservationService {
    async getUserReservations(userId: number) {
        return await ReservationRepository.findByUser(userId);
    }

    async createReservation(reservationData: any) {
        return await ReservationRepository.create(reservationData);
    }

    async cancelReservation(id: number, userId: number, reasonCancel?: string) {
        const reservation = await ReservationRepository.findById(id);
        if (!reservation) throw new Error("Reservation not found");
    
        const now = new Date();
        const reservationDate = new Date(reservation.date);
        const timeDiff = (reservationDate.getTime() - now.getTime()) / (1000 * 60); // Minutos
    
        if (timeDiff <= 60) {
            throw new Error("Cannot cancel reservation less than 1 hour before start");
        }
    
        return await ReservationRepository.cancelReservation(id, {
            canceled: true,
            cliCancel: true,
            reasonCancel,
        });
    }    

    async getAvailableReservationsByDate(date: string) {
        return await ReservationRepository.findAvailableByDate(date);
    }
}

export default new ReservationService();