import axios from "axios"
import {createAsyncThunk}from '@reduxjs/toolkit'


export const GetAll = createAsyncThunk("client-getAllClient", async (thunkAPI) => {
    const { data } = axios.get('https://localhost:7218/api/Client/getAll')
    return data
})

export const GetOne = createAsyncThunk("client-getClientById", async (id) => {
    let url = 'https://localhost:7218/api/Client/getById/' + id
    const { data } = axios.get(url)
    return data
})

export const Insert = createAsyncThunk("client-getClientById", async (client) => {
    return { data } = axios.post('https://localhost:7218/api/Client/insert', { client })

})

export const Update = createAsyncThunk("client-updateClient", async (id, client) => {
    let url = 'https://localhost:7218/api/Client/update/' + id
    return { data } = axios.put(url, { client })
})

export const Delete = createAsyncThunk("client-deleteClient", async (id) => {
    let url = 'https://localhost:7218/api/Client/delete/' + id
    return { data } = axios.delete(url)

})

