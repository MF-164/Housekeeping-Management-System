import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllCommentsFromServer } from "./commentSlice"
import Comment from "./Comment"
import Navbar from "../../../components/Navbar/Navbar"

const CommentList = ({ cleaningLadyId }) => {
    let dipspatch = useDispatch()
    // useEffect(() => {
    //     getData()
    // }, [])
    // const getData = () => {
    //     dipspatch(fetchAllCommentsFromServer())
    // }
    // let allComments = useSelector(s => s.comment.allComments.comments)
    let allComments = [
        {id:0,content:"4",rating:3,sendTime:"5/3/2024",clientId:1,cleaningLadyId:5},
        {id:2,content:"4",rating:1,sendTime:"5/3/2024",clientId:1,cleaningLadyId:1},
        {id:3,content:"4",rating:5,sendTime:"5/3/2024",clientId:1,cleaningLadyId:1},
        {id:4,content:"4",rating:4,sendTime:"5/3/2024",clientId:1,cleaningLadyId:5},
        {id:5,content:"4",rating:5,sendTime:"5/3/2024",clientId:1,cleaningLadyId:1},
        {id:6,content:"4",rating:3,sendTime:"5/3/2024",clientId:1,cleaningLadyId:2},
        {id:7,content:"4",rating:2,sendTime:"5/3/2024",clientId:1,cleaningLadyId:1},
    ]
    let comments = allComments.filter((comment) => comment.cleaningLadyId === cleaningLadyId)
    return (<>
        {/* <Navbar/> */}
        {comments.map((comment, index) =>
            <div key={index}><Comment comment={comment} /></div>
        )}
    </>)
}
export default CommentList