import ReservationRepository from "../repositories/ReservationRepository";

class ReservationService {
    async getUserReservations(userId: number) {
        return await ReservationRepository.findByUser(userId);
    }

    async createReservation(reservationData: any) {
        return await ReservationRepository.create(reservationData);
    }

    /*async cancelReservation(id: number, userId: number, reasonCancel?: string) {
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
    }   */
   
    async cancelReservation(id: number, userId: number, reasonCancel?: string) {
        const reservation = await ReservationRepository.findById(id);

        //Verificación de Existencia y pertenencia de la Reserva
        console.log(reservation);
        if (!reservation) throw new Error("Reservation not found");
        if (reservation.idUser !== userId) throw new Error("Don't have permission to cancel this reservation");
    
        //const now = new Date();
        const now = new Date();
        const nowLocal = new Date(now.getTime() - 5 * 60 * 60 * 1000);
        const reservationDate = new Date(reservation.date);
        const [hours, minutes, seconds] = reservation.startTime.split(":").map(Number);
        reservationDate.setUTCHours(hours, minutes, seconds, 0);
        
        const timeDiff = (reservationDate.getTime() - nowLocal.getTime()) / (1000 * 60);

        
        if (nowLocal.getTime() > reservationDate.getTime()) {
            throw new Error("Cannot cancel a reservation that has already started");
        }
    
        if (timeDiff <= 60) {
            throw new Error("Cannot cancel reservation less than 1 hour before start");
        }
    
        await ReservationRepository.cancelReservation(id, {
            canceled: true,
            cliCancel: true,
            reasonCancel,
        });
    }
}

export default new ReservationService();