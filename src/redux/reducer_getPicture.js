import * as TYPES from './types'

const initialState = {
    loading:false,
    pics:[],
    serverError:false,
};

export default function dealingToken(state = initialState, action) {

    switch (action.type) {
        case TYPES.PRODUCT.GETPIC.ONGOING:
            return {
                ...state,
                serverError:false,
                loading:true
            };
            break;
        case TYPES.PRODUCT.GETPIC.SUCCESS:

            return {
                ...state,
                loading:false,
                serverError:false,
                pics:action.pics
            };
            break;
        case TYPES.PRODUCT.GETPIC.ERROR:

            return {
                ...state,
                loading:false,
                serverError:true,
            };
            break;
        default:
            return state;
    }

}