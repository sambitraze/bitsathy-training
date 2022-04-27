import * as api from '../api';

api.getPosts();

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getPosts();
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