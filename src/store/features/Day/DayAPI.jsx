import axios from "axios"
import {createAsyncThunk}from '@reduxjs/toolkit'

export const GetAll = createAsyncThunk("day-getAllDay", async (thunkAPI) => {
    const { data } = axios.get('https://localhost:7218/api/Day/getAll')
    return data
})

export const GetOne = createAsyncThunk("Day-getDayById", async (id) => {
    let url = 'https://localhost:7218/api/Day/getById/' + id
    const { data } = axios.get(url)
    return data
})

export const Insert = createAsyncThunk("day-getDayById", async (day) => {
    return { data } = axios.post('https://localhost:7218/api/Day/insert', { day })

})

export const Update = createAsyncThunk("day-updateDay", async (id, day) => {
    let url = 'https://localhost:7218/api/Day/update/' + id
    return { data } = axios.put(url, { day })
})

export const Delete = createAsyncThunk("day-deleteDay", async (id) => {
    let url = 'https://localhost:7218/api/Day/delete/' + id
    return { data } = axios.delete(url)

})

