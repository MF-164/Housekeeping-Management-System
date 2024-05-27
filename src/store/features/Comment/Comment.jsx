const Comment = ({comment}) => {

    return (<>
    <p>
        <label>Id:{comment.Id}</label><br/>
        <label>Content:{comment?.Content}</label><br/>
        <label>Rating:{comment?.Rating}</label><br/>
        <label>SendTime:{comment?.SendTime}</label><br/>
        <label>ClientId:{comment?.ClientId}</label><br/>
        
    </p>
    </>)
}

export default Comment