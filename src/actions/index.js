import * as PostAPI from '../services/PostsAPI';
import * as CatAPI from '../services/CategoriesAPI';

// action creator function
export const increament = (data) => {
  // action
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

// posts action creator function
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
  
// category action creator function
export const getCategories = () => {
  return dispatch => {
    CatAPI.getCategories().then(categories => {
      dispatch({
        type: "GET_CATEGORIES",
        payload: categories,
      });
    }).catch(error=>{
      console.log("Get categories failed.");
      console.log("Error : ", error);
    });
  } 
};
