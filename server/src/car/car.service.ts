import {Injectable} from "@nestjs/common";
import {CarDao} from "./car.dao";

@Injectable()
export class CarService {
    constructor(private carDao: CarDao) {
    }

    async getAll() {
        return this.carDao.getAll();
    }
}