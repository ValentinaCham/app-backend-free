import { SpaceType } from "../models/SpaceType";
import { Space } from "../models/Space";

export const seedDatabase = async () => {
    try {
        const existingTypes = await SpaceType.count();
        if (existingTypes === 0) {
            await SpaceType.bulkCreate([
                { id: 0, description: "Sala Reunión" },
                { id: 1, description: "Escritorio Privado" },
                { id: 2, description: "Sala Proyección" },
            ]);
        }

        const existingSpaces = await Space.count();
        if (existingSpaces === 0) {
            await Space.bulkCreate([
                { type: 0, photo: "https://google.com", maxCapacity: 10, availability: true, pricePerHour: 25.0 },
                { type: 0, photo: "https://google.com", maxCapacity: 8, availability: true, pricePerHour: 20.0 },
                { type: 0, photo: "https://google.com", maxCapacity: 12, availability: false, pricePerHour: 30.0 },

                { type: 1, photo: "https://google.com", maxCapacity: 1, availability: true, pricePerHour: 15.0 },
                { type: 1, photo: "https://google.com", maxCapacity: 1, availability: false, pricePerHour: 18.0 },
                { type: 1, photo: "https://google.com", maxCapacity: 2, availability: true, pricePerHour: 20.0 },

                { type: 2, photo: "https://google.com", maxCapacity: 20, availability: true, pricePerHour: 50.0 },
                { type: 2, photo: "https://google.com", maxCapacity: 15, availability: false, pricePerHour: 45.0 },
                { type: 2, photo: "https://google.com", maxCapacity: 25, availability: true, pricePerHour: 55.0 },
            ]);
        }
        
    } catch (error) {
        console.error("Error Seed: ", error);
    }
};