import {Dispatch} from "react";
import {CarAction, CarActionType} from "../../types/car";
import axios from "axios";

export const fetchCars = () => {
    return async (dispatch: Dispatch<CarAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/cars')
            dispatch({type: CarActionType.FETCH_CARS, payload: response.data})
        } catch (e) {
            dispatch({
                type: CarActionType.FETCH_CARS_ERROR,
                payload: 'Error when load cars'})
        }
    }
}
