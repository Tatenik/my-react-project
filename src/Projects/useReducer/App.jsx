import { useReducer } from "react"
import reducer from './reducer'
import { ADD_COUNT, ADD_ELEMENT, DELETE_ELEMENT, MINUS_COUNT, RANDOM, SORTED_ARRAY } from './actionTypes';

function App() {
    const [state, dispatch] = useReducer(reducer, ["Sebastian", "John", "Eleonor", "Kate", "Brian", "Jack"])
 
//const handleClick = () => {
//    dispatch({type: ADD_COUNT})
// }
//const handleMinus = () => {
//    dispatch({type: MINUS_COUNT})
// }
//const handleRandom = () => {
//    dispatch({type: RANDOM, payload: 4})
// }

const handleSort = () => {
    dispatch( {type: SORTED_ARRAY})
}
const addUser = () => {
    dispatch( {type: ADD_ELEMENT, payload: "Kristina"})
}
const deleteUser = (userName) => {
    dispatch( {type: DELETE_ELEMENT, payload: userName})
}

 
    return (
    <div>
        <ul>
            {
                state.map(user => {
                    return <li key={user} onClick ={() => deleteUser(user)}>{user}</li>
                })
            }
        </ul>
        
        <button onClick={handleSort}>minus count</button>
        <button onClick={addUser}>add user</button>
        
    
    </div>
  )
}

export default App
