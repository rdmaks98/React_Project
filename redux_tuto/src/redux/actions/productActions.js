import { ActionTypes } from "../contants/action-type"
export const setProducts = (products) => {
    return {
        type:ActionTypes.SET_PRODCUTS,
        payload:products,
    }
}

export const SelectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const removeSelectedProduct = () => {
    return (
        {
            type: ActionTypes.REMOVE_SELECTED_PRODCUT,
        }
    )
}