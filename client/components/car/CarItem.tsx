import React from 'react';
import {ICar} from "../../types/car";

interface CarItemProps {
    car: ICar
}

const CarItem: React.FC<CarItemProps> = ({car}) => {
    return (
        <div>
            {car.id} | {car.brand} | {car.model} | {car.number}
        </div>
    );
};

export default CarItem;