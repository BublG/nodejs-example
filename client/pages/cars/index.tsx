import React from 'react';
import CarList from "../../components/car/CarList";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchCars} from "../../store/action-creators/car";

const Index = () => {
    const {cars, error} = useTypedSelector(state => state.car)
    return (
        <div>
            <h1>
                Cars list
            </h1>
            <div>
                <CarList cars={cars}/>
            </div>
        </div>
    );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(await fetchCars())
})