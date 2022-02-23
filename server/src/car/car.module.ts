import {Module} from "@nestjs/common";
import {CarService} from "./car.service";
import {CarDao} from "./car.dao";
import {CarController} from "./car.controller";

@Module({
    controllers: [CarController],
    providers: [CarService, CarDao],
})
export class CarModule {
}