import * as TYPES from './types'

const initialState = {
    loading:false,
    products:[],
    serverError:false,
};

export default function getProduct(state = initialState, action) {

    switch (action.type) {
        case TYPES.PRODUCT.GET.ONGOING:
            return {
                ...state,
                serverError:false,
                loading:true
            };
            break;
        case TYPES.PRODUCT.GET.SUCCESS:

            return {
                ...state,
                loading:false,
                serverError:false,
                products:action.products
            };
            break;
        case TYPES.PRODUCT.GET.ERROR:

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