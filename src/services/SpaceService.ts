import SpaceRepository from "../repositories/SpaceRepository";

class SpaceService {

    async getAllSpaces() {
        return await SpaceRepository.findAll();
    }

    async getSpaceById(id: number) {
        const space = await SpaceRepository.findById(id);
        if (!space) {
            throw new Error("Espacio no encontrado.");
        }
        return space;
    }
}

export default new SpaceService();