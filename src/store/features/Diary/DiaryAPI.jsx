import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'

export const GetAll = createAsyncThunk('Diary-getAll',async(thunkAPI)=> {
    let {data} =await axios.get('https://localhost:7218/api/Diary/all')
    return data
})

export const GetOne = createAsyncThunk('Diary-getOne',async(id) => {
    let url = 'https://localhost:7218/api/Diary/getById/' + id
    let {data} = await axios.get(url)
    return data
})

export const Insert=createAsyncThunk('Diary-insert',async(diary)=>{
    let {data} = axios.post('https://localhost:7218/api/Diary/insert',{diary})
    return data
})

export const Update=createAsyncThunk('Diary-update',async(id,diary)=>{
    let url = 'https://localhost:7218/api/Diary/update/'+id
     let {data} = axios.put(url,{diary})
     return data
})

export const Delete = createAsyncThunk('Diary-delete',(id) => {
    let url = 'https://localhost:7218/api/Diary/delete/' + id
    let {data} = axios.delete(url)
    return data
})
