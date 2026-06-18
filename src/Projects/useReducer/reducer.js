import { ADD_COUNT, ADD_ELEMENT, DELETE_ELEMENT, MINUS_COUNT, RANDOM, SORTED_ARRAY } from "./actionTypes";


function reducer(state, action) {
 switch (action.type) {
    case SORTED_ARRAY: return sortedArray(state)
    case ADD_ELEMENT: return addElement(state, action.payload)
    case DELETE_ELEMENT: return state.filter(user => user !== action.payload)
    default: return state;
 }  
}


const sortedArray = (state) => {
    return state.toSorted()
}
const addElement = (state,username) => {
    if(!state.includes(username)) {
       return[...state, username];
    } 
    console.log("user is alredy exist")
    return state
}
export default reducer