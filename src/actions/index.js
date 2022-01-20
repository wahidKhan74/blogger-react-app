import * as PostAPI from '../services/PostsAPI';

// ACTION
export const increament = (data) => {
  return {
    type: "INCREMENT",
    payload: data,
  };
};

export const decreament = (data) => {
  return {
    type: "DECREMENT",
    payload: data,
  };
};


export const loggedIn = () => {
    return {
      type: "SIGN_IN",
      payload: 1,
    };
};

// posts action
export const getPosts = () => {
  return dispatch => {
    PostAPI.getPosts().then(posts => {
      dispatch({
        type: "GET_POSTS",
        payload: posts,
      });
    }).catch(error=>{
      console.log("Get posts failed.");
      console.log("Error : ", error);
    });
  } 
};
  
