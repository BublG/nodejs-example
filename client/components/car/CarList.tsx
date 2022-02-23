import React from 'react';
import {ICar} from "../../types/car";
import {Box, Grid} from "@mui/material";
import CarItem from "./CarItem";

interface CarListProps {
    cars: ICar[]
}

const CarList: React.FC<CarListProps> = ({cars}) => {
    return (
        <Grid container direction="column">
            <Box p={2}>
                {cars.map(car =>
                    <CarItem
                        key={car.id}
                        car={car}
                    />
                )}
            </Box>
        </Grid>
    );
};

export default CarList;