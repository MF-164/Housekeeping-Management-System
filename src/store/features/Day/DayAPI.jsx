import axios from "axios"

export const GetAll = async()=>{
    const { data } =await axios.get('https://localhost:7218/api/Day/getAll')
    return data
}
    

export const GetOneById = async(id) =>{
    let url = 'https://localhost:7218/api/Day/getById/' + id
    const { data } = await axios.get(url)
    return data
}
    
export const Insert=async(Day)=>{
    let {data} = await axios.post('https://localhost:7218/api/Day/insert',Day)
   return data
}

export const Update=async(id,Day)=>{
   let {data} = await axios.put('https://localhost:7218/api/Day/update/'+id,Day)
  return data
}

export const Delete = async (id) =>{
   let url = 'https://localhost:7218/api/Day/delete/' + id
   let {data} = await axios.delete(url)
   return data
}

// export const Insert = createAsyncThunk("day-getDayById", async (day) => {
//     return { data } = axios.post('https://localhost:7218/api/Day/insert', { day })

// })

// export const Update = createAsyncThunk("day-updateDay", async (id, day) => {
//     let url = 'https://localhost:7218/api/Day/update/' + id
//     return { data } = axios.put(url, { day })
// })

// export const Delete = createAsyncThunk("day-deleteDay", async (id) => {
//     let url = 'https://localhost:7218/api/Day/delete/' + id
//     return { data } = axios.delete(url)

// })

