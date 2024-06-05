import axios from "axios"


export const GetAll = async() => {
    const { data } =await axios.get('https://localhost:7218/api/Comment/getAll')
    return data
}

export const GetOneById = async(id) => {
    let url = 'https://localhost:7218/api/Comment/getById/' + id
    const { data } =await axios.get(url)
    return data
}

export const Insert = async(comment) => {
   const{ data } =await axios.post('https://localhost:7218/api/Comment/insert', comment )
   return data
}

export const Delete =async (id) => {
    let url = 'https://localhost:7218/api/Comment/delete/' + id
    const { data } =await axios.delete(url)
    return data
}
