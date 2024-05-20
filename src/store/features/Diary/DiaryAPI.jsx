import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit'
import { async } from "q"

export const GetAll = async () => {
    return { data } = await axios.get('https://localhost:7218/api/Diary/all')

}

export const GetOne = async () => {
    let url = 'https://localhost:7218/api/Diary/getById/' + id
    return { data } = await axios.get(url)

}

// export const Insert=createAsyncThunk('Diary-insert',async(diary)=>{
//     let {data} = axios.post('https://localhost:7218/api/Diary/insert',{diary})
//     return data
// })

// export const Update=createAsyncThunk('Diary-update',async(id,diary)=>{
//     let url = 'https://localhost:7218/api/Diary/update/'+id
//      let {data} = axios.put(url,{diary})
//      return data
// })

// export const Delete = createAsyncThunk('Diary-delete',(id) => {
//     let url = 'https://localhost:7218/api/Diary/delete/' + id
//     let {data} = axios.delete(url)
//     return data
// })
