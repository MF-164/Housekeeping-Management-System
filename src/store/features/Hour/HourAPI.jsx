import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'

export const GetAll = createAsyncThunk('Hours-getAll',async(thunkAPI)=> {
    let {data} =await axios.get('https://localhost:7218/api/Hours/all')
    return data
})

export const GetOne = createAsyncThunk('Hours-getOne',async(id) => {
    let url = 'https://localhost:7218/api/Hours/getById/' + id
    let {data} = await axios.get(url)
    return data
})

export const Insert=createAsyncThunk('Hours-insert',async(Hour)=>{
    let {data} = axios.post('https://localhost:7218/api/Hours/insert',{Hour})
    return data
})

export const Update=createAsyncThunk('Hours-update',async(id,Hour)=>{
    let url = 'https://localhost:7218/api/Hours/update/'+id
     let {data} = axios.put(url,{Hour})
     return data
})

export const Delete = createAsyncThunk('Hours-delete',(id) => {
    let url = 'https://localhost:7218/api/Hours/delete/' + id
    let {data} = axios.delete(url)
    return data
})
