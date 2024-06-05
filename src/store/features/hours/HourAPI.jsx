import axios from "axios"

export const GetAll =async()=> {
    const {data} =await axios.get('https://localhost:7218/api/Hours/getAll')
    return data
}

export const GetOne = async(id)=> {
    let url = 'https://localhost:7218/api/Hours/getById/' + id
    const {data} = await axios.get(url)
    return data
}

// export const Insert=createAsyncThunk('Hours-insert',async(Hour)=>{
//     let {data} = axios.post('https://localhost:7218/api/Hours/insert',{Hour})
//     return data
// })

// export const Update=createAsyncThunk('Hours-update',async(id,Hour)=>{
//     let url = 'https://localhost:7218/api/Hours/update/'+id
//      let {data} = axios.put(url,{Hour})
//      return data
// })

// export const Delete = createAsyncThunk('Hours-delete',(id) => {
//     let url = 'https://localhost:7218/api/Hours/delete/' + id
//     let {data} = axios.delete(url)
//     return data
// })
