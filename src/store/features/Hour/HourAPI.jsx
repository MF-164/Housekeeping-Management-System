import axios from "axios"

export const GetAll = async () => {
    const { data } = await axios.get('https://localhost:7218/api/Hours/getAll')
    return data
}

export const GetOne = async (id) => {
    let url = 'https://localhost:7218/api/Hours/getById/' + id
    const { data } = await axios.get(url)
    return data
}

export const Insert = async (hour) => {
    let { data } = await axios.post('https://localhost:7218/api/Hours/insert', hour)
    return data
}

export const Update = async (id, hour) => {
    let url = 'https://localhost:7218/api/Hours/update/' + id
    let { data } = await axios.put(url, hour)
    return data
}

export const Delete = async (id) => {
    let url = 'https://localhost:7218/api/Hours/delete/' + id
    let { data } = await axios.delete(url)
    return data
}
