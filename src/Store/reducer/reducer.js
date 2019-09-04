import * as actionTypes from '../actions/actionTypes'


const initialState =
{
    Animals: [],
    error: null,
 

}


const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_ANIMAL_SUCCESS:
            return {
                ...state,
                Animals: action.animal    //adding animals to Animal array which is dont FetchAnimalMethod
            }

        case actionTypes.FETCH_ANIMAL_ERROR:
            return {
                ...state,
                error: action.error
            }

        default:
            return state

    }





}

export default Reducer

