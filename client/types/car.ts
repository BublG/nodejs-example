export interface ICar {
    id: number
    number: string
    brand: string
    model: string
}

export interface CarState {
    cars: ICar[];
    error: string;
}

export enum CarActionType {
    FETCH_CARS = 'FETCH_CARS',
    FETCH_CARS_ERROR = 'FETCH_CARS_ERROR',
}

interface FetchCarAction {
    type: CarActionType.FETCH_CARS;
    payload: ICar[];
}

interface FetchCarErrorAction {
    type: CarActionType.FETCH_CARS_ERROR;
    payload: string;
}

export type CarAction = FetchCarAction | FetchCarErrorAction;