import {CarAction, CarActionType, CarState} from "../../types/car";

const initialState: CarState = {
    cars: [],
    error: ''
}

export const carReducer = (state = initialState, action: CarAction): CarState => {
    switch (action.type) {
        case CarActionType.FETCH_CARS:
            return {error: '', cars: action.payload}
        case CarActionType.FETCH_CARS_ERROR:
            return {cars: state.cars, error: action.payload}
        default:
            return state;
    }
}