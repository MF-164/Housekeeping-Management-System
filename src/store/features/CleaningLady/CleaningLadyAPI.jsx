import axios from 'axios'


export const GetAll = async () => {
    let {data} =await axios.get('https://localhost:7218/api/CleaningLady/all')
    return data
}

export const GetOne = async (id) =>{
    let url = 'https://localhost:7218/api/CleaningLady/getById/' + id
    let {data} = await axios.get(url)
    return data
}

export const Insert=async(cleaningLady)=>{
     let {data} = await axios.post('https://localhost:7218/api/CleaningLady/insert',{cleaningLady})
    return data
}

// export const Update=createAsyncThunk('cleaningLady-update',async(id,cleaningLady)=>{
//     let url = 'https://localhost:7218/api/CleaningLady/update/'+id
//      let {data} = axios.put(url,{cleaningLady})
//      return data
// })

// export const Delete = createAsyncThunk('cleaningLady-delete',(id) => {
//     let url = 'https://localhost:7218/api/CleaningLady/delete/' + id
//     let {data} = axios.delete(url)
//     return data
// })
