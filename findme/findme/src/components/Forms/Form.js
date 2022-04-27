import React, { useState } from "react";
import useStyles from './Styles.js';
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts.js";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
const Form = (props) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        content: '',
        tags: '',
        file: '',

    });
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(postData);
        dispatch(createPost(postData));
    }
    const clear = () => {
        setPostData({
            creator: '',
            title: '',
            content: '',
            tags: '',
            file: '',
        });
    }
    const currentId = false
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="content" variant="outlined" label="Content" fullWidth multiline rows={4} value={postData.content} onChange={(e) => setPostData({ ...postData, content: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;