import {FETCH_PET_DATA_COMPLETE, FETCH_PET_DATA_START, FETCH_PET_DATA_ERROR} from '../constants/actionTypes';
import objectAssign from "object-assign"; 

const initialSatae = {
    fatching: false,
    fatched: false,
    data: {},
    error: null
};

export default function PetDataReducer(state = initialSatae, action) {
    switch (action.type) {
        case FETCH_PET_DATA_START:
            return objectAssign({}, state, {fatching: true});
        case FETCH_PET_DATA_COMPLETE:
            return objectAssign({}, state, {
                fatching: false,
                fatched: true,
                data: action.payload
            });
        case FETCH_PET_DATA_ERROR:
            return objectAssign({}, state, {
                fatching: false,
                fatched: false,
                error: action.payload
            });
        default:
            return state;
    }
}