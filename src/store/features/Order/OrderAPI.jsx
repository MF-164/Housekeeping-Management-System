import axios from "axios"
export const GetAll = async () => {
    let { data } = await axios.get('https://localhost:7218/api/Order/all')
    return data
}

export const GetOne = async (id) => {
    let url = 'https://localhost:7218/api/Order/getById/' + id
    const { data } = await axios.get(url)
    return data
}

// export const Insert=createAsyncThunk('Order-insert',async(Order)=>{
//     let {data} = axios.post('https://localhost:7218/api/Order/insert',{Order})
//     return data
// })

// export const Update=createAsyncThunk('Order-update',async(id,Order)=>{
//     let url = 'https://localhost:7218/api/Order/update/'+id
//      let {data} = axios.put(url,{Order})
//      return data
// })

// export const Delete = createAsyncThunk('Order-delete',(id) => {
//     let url = 'https://localhost:7218/api/Order/delete/' + id
//     let {data} = axios.delete(url)
//     return data
// })
