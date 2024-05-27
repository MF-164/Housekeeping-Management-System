import { GetAll, GetOne } from './CommentAPI'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const commentState = {
    allComments: { comments: [] },
    currentComment: undefined,
    status: "idle"
}

const fetchAllFromServer=createAsyncThunk("comment-getAllComment", async (thunkAPI) => {
    const response =  await GetAll()
    return response
})
const fetchByIdFromServer= createAsyncThunk("comment-getCommentById", async (thunkAPI,id) => {
    const response =  await GetOne(id)
    return response
})
// const =createAsyncThunk("comment-updateComment", async (thunkAPI,id, comment) => {})
// const =createAsyncThunk("comment-deleteComment", async (thunkAPI,id) => {})
// const =createAsyncThunk("comment-deleteComment", async (thunkAPI,comment) => {})

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: commentState,
    reducers: {
        addComment: (state, action) => {//NOTE:addComment => payload:comment
            state.allComments.comments.push(action.payload)
        },
        delComment: (state, action) => {//NOTE:delComment => payload:id
            let index = state.allComments.comments
                .findIndex(comment => comment.id === action.payload)
            state.allComments.comments.splice(index, 1)
        },
        updateComment: (state, action) => {//NOTE:updateComment => payload:comment{same id}
            let index = state.allComments.comments
                .findIndex(comment => comment.id === action.payload.id)
            state.allComments.comments.splice(index, 1, action.payload)
        },
        extraReducers: (builder) => {
            builder.addCase(fetchAllFromServer.fulfilled, (state, action) => {
                state.allComments.comments = action.payload
                state.status = "success"
            }).addCase(fetchAllFromServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchAllFromServer.pending, (state, action) => {
                state.status = "pending"
            })

                .addCase(fetchByIdFromServer.fulfilled, (state, action) => {
                    state.currentComment = action.payload
                    state.status = "success"
                }).addCase(fetchByIdFromServer.rejected, (state, action) => {
                    state.status = "failed"
                }).addCase(fetchByIdFromServer.pending, (state, action) => {
                    state.status = "pending"
                })
        }
    }
})

export const { addComment, updateComment, delComment } = commentSlice.actions

export default commentSlice.reducer