import * as TYPES from './types'

const initialState = {
    uploading:false,
    productId:null,
    servrError:false,
};

export default function dealingToken(state = initialState, action) {

    switch (action.type) {
        case TYPES.PRODUCT.UPLOAD.ONGOING:
            return {
                ...state,
                uploading:true,
                servrError:false,
            };
            break;
        case TYPES.PRODUCT.UPLOAD.SUCCESS:

            return {
                ...state,
                uploading:false,
                productId:action.productId,
                servrError:false,
            };
            break;
        case TYPES.PRODUCT.UPLOAD.ERROR:

            return {
                ...state,
                uploading:false,
                productId:action.productId,
                servrError:true,
            };
            break;
        default:
            return state;
    }

}