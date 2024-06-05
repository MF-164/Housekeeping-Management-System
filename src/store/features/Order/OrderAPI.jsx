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

export const Insert = async (order) => {
    const { data } = await axios.post('https://localhost:7218/api/Order/insert', order)
    return data
}

export const Update = async (id, Order) => {
    let url = 'https://localhost:7218/api/Order/update/' + id
    const { data } = await axios.put(url, Order)
    return data
}

export const Delete = async (id) => {
    let url = 'https://localhost:7218/api/Order/delete/' + id
    const { data } = await axios.delete(url)
    return data
}
