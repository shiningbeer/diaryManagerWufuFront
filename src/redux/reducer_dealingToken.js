import * as TYPES from './types'

const initialState = {
    justChangeForRerender:0,
};

export default function dealingToken(state = initialState, action) {

    switch (action.type) {
        case TYPES.TOKEN.FETCHED:
            return {
                ...state,
                justChangeForRerender: state.justChangeForRerender+1,
            };
            break;
        case TYPES.TOKEN.DELETED:

            return {
                ...state,
                justChangeForRerender: state.justChangeForRerender+1,
            };
            break;
        default:
            return state;
    }

}