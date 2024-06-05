import { GetAll, GetOneById, Delete, Insert } from './CommentAPI'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const commentState = {
    allComments: { comments: [] },
    currentComment: undefined,
    status: "idle"
}

const fetchAllCommentsFromServer = createAsyncThunk("comment-getAllComment", async (thunkAPI) => {
    const response = await GetAll()
    return response
})

const fetchCommenByIdFromServer = createAsyncThunk("comment-getCommentById", async (id) => {
    const response = await GetOneById(id)
    return response
})


const deleteCommentFromServer = createAsyncThunk("comment-delete", async (id) => {
    const response = await Delete(id)
    return response
})

const insertCommenForServer = createAsyncThunk("comment-insert", async (comment) => {
    const response = await Insert(comment)
    return response
})



export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: commentState,

    extraReducers: (builder) => {
        builder.addCase(fetchAllCommentsFromServer.fulfilled, (state, action) => {
            state.allComments.comments = action.payload
            state.status = "success"
        }).addCase(fetchAllCommentsFromServer.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchAllCommentsFromServer.pending, (state, action) => {
            state.status = "pending"
        })

            .addCase(fetchCommenByIdFromServer.fulfilled, (state, action) => {
                state.currentComment = action.payload
            })

            .addCase(insertCommenForServer.fulfilled, (state, action) => {
                state.allComments.comments = [...state.allComments.comments, action.payload]
            })

            .addCase(deleteCommentFromServer.fulfilled, (state, action) => {
                let index = state.allComments.comments
                    .findIndex(comment => comment.id === action.payload)
                state.allComments.comments.splice(index, 1)
                if (state.currentComment?.id === action.payload)
                    state.currentComment = undefined
            })
    }
})


export default commentSlice.reducer