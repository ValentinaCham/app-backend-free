import { Space } from "../models/Space";

class SpaceRepository {
    async findAll() {
        return await Space.findAll();
    }

    async findById(id: number) {
        return await Space.findByPk(id);
    }
}

export default new SpaceRepository();