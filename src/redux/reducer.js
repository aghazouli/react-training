import { DISHES } from '../shared/dishes';
import {Promotions} from '../shared/promotions';
import {Leaders} from '../shared/leaders';

export const initialState = {
    dishes: DISHES,
    promotions: Promotions,
    leaders: Leaders
};

export const Reducer = (state = initialState, action) => {
    return state;
};
