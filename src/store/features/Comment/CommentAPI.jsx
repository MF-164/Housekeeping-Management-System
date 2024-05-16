
import axios from "axios"
import {createAsyncThunk}from '@reduxjs/toolkit'


export const GetAll = createAsyncThunk("comment-getAllComment", async (thunkAPI) => {
    const { data } = axios.get('https://localhost:7218/api/Comment/getAll')
    return data
})

export const GetOne = createAsyncThunk("comment-getCommentById", async (id) => {
    let url = 'https://localhost:7218/api/Comment/getById/' + id
    const { data } = axios.get(url)
    return data
})

export const Insert = createAsyncThunk("comment-getCommentById", async (comment) => {
    return { data } = axios.post('https://localhost:7218/api/Comment/insert', { comment })

})

export const Update = createAsyncThunk("comment-updateComment", async (id, comment) => {
    let url = 'https://localhost:7218/api/Comment/update/' + id
    return { data } = axios.put(url, { comment })
})

export const Delete = createAsyncThunk("comment-deleteComment", async (id) => {
    let url = 'https://localhost:7218/api/Comment/delete/' + id
    return { data } = axios.delete(url)

})

