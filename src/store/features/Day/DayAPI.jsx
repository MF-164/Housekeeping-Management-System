import axios from "axios"

export const GetAll = async () => {
    const { data } = await axios.get('https://localhost:7218/api/Day/getAll')
    return data
}


export const GetOneById = async (id) => {
    let url = 'https://localhost:7218/api/Day/getById/' + id
    const { data } = await axios.get(url)
    return data
}

export const Insert = async (Day) => {
    let { data } = await axios.post('https://localhost:7218/api/Day/insert', Day)
    return data
}

export const Update = async (id, Day) => {
    const { data } = await axios.put('https://localhost:7218/api/Day/update/' + id, Day)
    return data
}

export const Delete = async (id) => {
    let url = 'https://localhost:7218/api/Day/delete/' + id
    const { data } = await axios.delete(url)
    return data
}


