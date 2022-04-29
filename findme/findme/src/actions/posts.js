import * as api from '../api/index.js';

export const getPost = (id) => async (dispatch) => {
    try {
        // dispatch({ type: START_LOADING });

        const { data } = await api.fetchPost(id);

        dispatch({ type: 'FETCH_POST', payload: { post: data } });
    } catch (error) {
        console.log(error);
    }
};

export const getPosts = (page) => async (dispatch) => {
    try {
        const { data: { data, currentPage, numberOfPages } } = await api.fetchPosts(page);
        dispatch({ type: 'FETCH_ALL', payload: { data, currentPage, numberOfPages } });
    } catch (error) {
        console.log(error);
    }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
        dispatch({ type: 'FETCH_BY_SEARCH', payload: { data } });
    } catch (error) {
        console.log(error);
    }
};

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