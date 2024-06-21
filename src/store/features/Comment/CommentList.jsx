import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllCommentsFromServer } from "./commentSlice"
import Comment from "./Comment"
import Navbar from "../../../components/Navbar/Navbar"
import './CommentList.scss'
import './AddComment'

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AddComment from "./AddComment"



function ElevationScroll(props) {

    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};







const CommentList = () => {
    let dipspatch = useDispatch()
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        dipspatch(fetchAllCommentsFromServer())
    }
    let allComments = useSelector(s => s.comment.allComments.comments)
    let cleaningLady = useSelector(s => s.cleaningLady.currentLady)

    let comments = allComments.filter((comment) => comment.cleaningLadyId === cleaningLady.id)
    return (<div className="commentList">
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll >
                <AppBar>
                    <Navbar/>
                </AppBar>
                
            </ElevationScroll>
            <Toolbar />
            <Container>
            <h1>{`${cleaningLady?.firstName.charAt(0).toUpperCase()+cleaningLady?.firstName.substring(1)} 
            ${cleaningLady?.lastName.charAt(0).toUpperCase()+cleaningLady?.lastName.substring(1)}'s comments:`}</h1>
                <Box sx={{ my: 2 }}>
                    <div className="list">
                        {comments.map((comment, index) =>
                            <div key={index}><Comment comment={comment} cleaningLady={cleaningLady} /></div>
                        )}
                    </div>
                </Box>
            </Container>
        </React.Fragment>
        <AddComment cleaningLady={cleaningLady} />
    </div>)
}
export default CommentList