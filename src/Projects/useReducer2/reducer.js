import { ADD_POSTS, CHANGE_POSTS_IDS, DELETE_POST_BY_ID } from "./actionTypes";

export const initialState = {
    action: 0,
    developers: [],
    posts: [],
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

const deletePost = (state, postId) => {
const result = state.posts.filter(post => post.id !== postId);
return{
    ...state,
    posts: result,
    action: state.action + 1
}
}

const changePosts = (state) => {
    const result = state.posts.map(function(post,index) {
        post.id = this[index];
        return post
    }, state.arr)
    return {
        ...state,
        posts: result,
        action: state.action + 1
    }
}

function reducer(state,action) {
  switch (action.type) {
    case ADD_POSTS: return{
    ...state,
    posts: action.payload.posts,
    actions: state + 1
  }  
  case DELETE_POST_BY_ID: return deletePost (state, action.payload)
  case CHANGE_POSTS_IDS: return changePosts (state)


  default: return state
    }
}



export default reducer