import axios from 'axios'


export const GetAll = async () => {
    let {data} =await axios.get('https://localhost:7218/api/CleaningLady/getAll')
    return data
}

export const GetOneById = async (id) =>{
    let url = 'https://localhost:7218/api/CleaningLady/getById/' + id
    let {data} = await axios.get(url)
    return data
}

export const Insert=async(cleaningLady)=>{
     let {data} = await axios.post('https://localhost:7218/api/CleaningLady/insert',cleaningLady)
    return data
}

export const Update=async(id,cleaningLady)=>{
    let {data} = await axios.put('https://localhost:7218/api/CleaningLady/update/'+id,cleaningLady)
   return data
}

export const Delete = async (id) =>{
    let url = 'https://localhost:7218/api/CleaningLady/delete/' + id
    let {data} = await axios.delete(url)
    return data
}
