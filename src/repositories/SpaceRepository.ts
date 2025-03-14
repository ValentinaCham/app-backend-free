import { Space } from "../models/Space";

class SpaceRepository {
    async findAll() {
        return await Space.findAll();
    }

    async findAllAvailableSpaces() {
        return await Space.findAll({
            where: { availability: true }
        });
    }

    async findById(id: number) {
        return await Space.findByPk(id);
    }
}

export default new SpaceRepository();