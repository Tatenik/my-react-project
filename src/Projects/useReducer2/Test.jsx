import { useEffect, useReducer } from "react"
import reducer, { initialState } from "./reducer"
import { ADD_POSTS, CHANGE_POSTS_IDS, DELETE_POST_BY_ID } from "./actionTypes";
import axios from 'axios';
import './Test.css'
import { AiOutlineFieldNumber } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";




export default function Test() {
    const [state, dispatch] = useReducer(reducer, initialState );

    useEffect(() => {
      axios({
        baseURL: 'https://jsonplaceholder.typicode.com/',
        url: 'posts',
        params: {
            _limit: 10
        }
      }).then(res => {
        dispatch({type: ADD_POSTS, payload:{ posts: res.data} })
        
      }).then (() => dispatch({type: CHANGE_POSTS_IDS}))
    }, [])
    
    const deleteById = (postId) => {
       dispatch({type: DELETE_POST_BY_ID, payload: postId}) 
    }

    return(
        <div>
            <div className="Posts">
                {
                    state.posts.map(post => {
                        return (
                            <div key={post.id} >
                                <span className="icon">
                                    <AiOutlineFieldNumber/>
                                    {" "}
                                    {post.id}
                                </span>
                                <button className='btn-delete'>
                                    <IoCloseSharp onClick={() => deleteById(post.id)}/>
                                </button>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )  
}