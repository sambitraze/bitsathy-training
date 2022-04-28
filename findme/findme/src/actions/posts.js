import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: "CREATE", payload: data });
    } catch (err) {
        console.log(err);
    }
}
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);  
      dispatch({ type: "LIKE", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const deletePost = (id) => async (dispatch) => {
    console.log(id);
    try {
        const { data } = await api.deletePost(id);
        console.log(data);
        dispatch({ type: "DELETE", payload: data });
    } catch (error) {
        console.log(error.message);
    }
}