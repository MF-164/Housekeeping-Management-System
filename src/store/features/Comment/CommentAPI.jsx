import axios from "axios"


export const GetAll = () => {
    const { data } = axios.get('https://localhost:7218/api/Comment/getAll')
    return data
}

export const GetOneById = (id) => {
    let url = 'https://localhost:7218/api/Comment/getById/' + id
    const { data } = axios.get(url)
    return data
}

export const Insert = (comment) => {
   const{ data } = axios.post('https://localhost:7218/api/Comment/insert', { comment })
   return data
}


export const Update = (id, comment) => {
    let url = 'https://localhost:7218/api/Comment/update/' + id
    return { data } = axios.put(url, { comment })
}

export const Delete = (id) => {
    let url = 'https://localhost:7218/api/Comment/delete/' + id
    return { data } = axios.delete(url)
}
