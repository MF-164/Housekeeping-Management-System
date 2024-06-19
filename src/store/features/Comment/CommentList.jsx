import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllCommentsFromServer } from "./commentSlice"
import Comment from "./Comment"
import Navbar from "../../../components/Navbar/Navbar"
import './CommentList.scss'



import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
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
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};




const CommentList = () => {
    let dipspatch = useDispatch()
    // useEffect(() => {
    //     getData()
    // }, [])
    // const getData = () => {
    //     dipspatch(fetchAllCommentsFromServer())
    // }
    // let allComments = useSelector(s => s.comment.allComments.comments)
    let cleaningLady = useSelector(s => s.cleaningLady.currentLady)
    let allComments = [
        { id: 0, content: "4", rating: 3, sendTime: "5/3/2024", clientId: 14, cleaningLadyId: 5 },
        { id: 2, content: "4", rating: 1, sendTime: "5/3/2024", clientId: 14, cleaningLadyId: 1 },
        { id: 3, content: "4", rating: 5, sendTime: "5/3/2024", clientId: 8, cleaningLadyId: 1 },
        { id: 4, content: "4", rating: 4, sendTime: "5/3/2024", clientId: 10, cleaningLadyId: 5 },
        { id: 5, content: "4", rating: 5, sendTime: "5/3/2024", clientId: 10, cleaningLadyId: 1 },
        { id: 6, content: "4", rating: 3, sendTime: "5/3/2024", clientId: 13, cleaningLadyId: 2 },
        { id: 7, content: "4", rating: 2, sendTime: "5/3/2024", clientId: 13, cleaningLadyId: 1 },
        { id: 0, content: "4", rating: 3, sendTime: "5/3/2024", clientId: 14, cleaningLadyId: 5 },
        { id: 2, content: "4", rating: 1, sendTime: "5/3/2024", clientId: 14, cleaningLadyId: 1 },
        { id: 3, content: "4", rating: 5, sendTime: "5/3/2024", clientId: 8, cleaningLadyId: 1 },
        { id: 4, content: "4", rating: 4, sendTime: "5/3/2024", clientId: 10, cleaningLadyId: 5 },
        { id: 5, content: "4", rating: 5, sendTime: "5/3/2024", clientId: 10, cleaningLadyId: 1 },
        { id: 6, content: "4", rating: 3, sendTime: "5/3/2024", clientId: 13, cleaningLadyId: 2 },
        { id: 7, content: "4", rating: 2, sendTime: "5/3/2024", clientId: 13, cleaningLadyId: 1 },
        { id: 0, content: "4", rating: 3, sendTime: "5/3/2024", clientId: 14, cleaningLadyId: 5 },
        { id: 2, content: "4", rating: 1, sendTime: "5/3/2024", clientId: 14, cleaningLadyId: 1 },
        { id: 3, content: "4", rating: 3, sendTime: "5/3/2024", clientId: 8, cleaningLadyId: 1 },
        { id: 4, content: "4", rating: 4, sendTime: "5/3/2024", clientId: 10, cleaningLadyId: 5 },
        { id: 5, content: "4", rating: 5, sendTime: "5/3/2024", clientId: 10, cleaningLadyId: 1 },
        { id: 6, content: "4", rating: 3, sendTime: "5/3/2024", clientId: 13, cleaningLadyId: 2 },
        { id: 7, content: "4", rating: 2, sendTime: "5/3/2024", clientId: 13, cleaningLadyId: 1 },
        { id: 0, content: "4", rating: 3, sendTime: "5/3/2024", clientId: 14, cleaningLadyId: 5 },
        { id: 2, content: "4", rating: 1, sendTime: "5/3/2024", clientId: 14, cleaningLadyId: 1 },
        { id: 3, content: "4", rating: 5, sendTime: "5/3/2024", clientId: 8, cleaningLadyId: 1 },
        { id: 4, content: "4", rating: 4, sendTime: "5/3/2024", clientId: 10, cleaningLadyId: 5 },
        { id: 5, content: "4", rating: 5, sendTime: "5/3/2024", clientId: 10, cleaningLadyId: 1 },
        { id: 6, content: "4", rating: 3, sendTime: "5/3/2024", clientId: 13, cleaningLadyId: 2 },
        { id: 7, content: "4", rating: 2, sendTime: "5/3/2024", clientId: 13, cleaningLadyId: 1 },
        { id: 0, content: "4", rating: 3, sendTime: "5/3/2024", clientId: 14, cleaningLadyId: 5 },
        { id: 2, content: "4", rating: 1, sendTime: "5/3/2024", clientId: 14, cleaningLadyId: 1 },
        { id: 3, content: "4", rating: 5, sendTime: "5/3/2024", clientId: 8, cleaningLadyId: 1 },
        { id: 4, content: "4", rating: 4, sendTime: "5/3/2024", clientId: 10, cleaningLadyId: 5 },
        { id: 5, content: "4", rating: 5, sendTime: "5/3/2024", clientId: 10, cleaningLadyId: 1 },
        { id: 6, content: "4", rating: 3, sendTime: "5/3/2024", clientId: 13, cleaningLadyId: 2 },
        { id: 7, content: "4", rating: 2, sendTime: "5/3/2024", clientId: 13, cleaningLadyId: 1 },
    ]
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
                <Box sx={{ my: 2 }}>
                    <div className="list">
                        {comments.map((comment, index) =>
                            <div key={index}><Comment comment={comment} cleaningLady={cleaningLady} /></div>
                        )}
                    </div>
                </Box>
            </Container>
        </React.Fragment>
    </div>)
}
export default CommentList