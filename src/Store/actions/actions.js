import * as  actionTypes from './actionTypes'


export const FetchAnimalSuccess=(animal)=>
{
    return{
        type:actionTypes.FETCH_ANIMAL_SUCCESS,           //actions which include the type and payload
        animal:animal
    }

}

export const FetchAnimalError=(error)=>
{
    return{
        type:actionTypes.FETCH_ANIMAL_ERROR,
        error:error
    }
}

//using thunk middleware we can fetch data
 export const FetchAnimal=()=>
{

    return dispatch=>{
        fetch('https://gist.githubusercontent.com/borlaym/585e2e09dd6abd9b0d0a/raw/6e46db8f5c27cb18fd1dfa50c7c921a0fbacbad0/animals.json')
        .then(res => res.json())  //converting json into object
        .then(res=>{
            
             dispatch(FetchAnimalSuccess(res));
            return res;

        }).catch(error=>{
            console.log(error)
            dispatch(FetchAnimalError(error))
        })
    }

}