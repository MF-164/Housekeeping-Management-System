import axios from "axios"

export const GetAll = () => {
    const { data } = axios.get('https://localhost:7218/api/Client/getAll')
    return data
}

export const GetOne = (id) => {
    let url = 'https://localhost:7218/api/Client/getById/' + id
    const { data } = axios.get(url)
    return data
}

// export const Insert = (client) => {
//     return { data } = axios.post('https://localhost:7218/api/Client/insert', { client })
// }

// export const Update = (id, client) => {
//     let url = 'https://localhost:7218/api/Client/update/' + id
//     return { data } = axios.put(url, { client })
// }

// export const Delete = (id) => {
//     let url = 'https://localhost:7218/api/Client/delete/' + id
//     return { data } = axios.delete(url)
// }

