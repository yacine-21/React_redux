export const increment = (multiply) =>{
    return{
        type: "INCREMENT",
        payload: multiply
    };
}

export const decrement = () =>{
    return{
        type: "DECREMENT"
    };
}

export const SIGN_IN = () =>{
    return{
        type: "SIGN_IN"
    };
}