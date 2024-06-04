import axios from "axios"

export const GetAll = async () => {
    const { data } = await axios.get('https://localhost:7218/api/Client/getAll')
    return data
}

export const GetOne = async (id) => {
    let url = 'https://localhost:7218/api/Client/getById/' + id
    const { data } = await axios.get(url)
    return data
}

export const Insert = async (client) => {
    const { data } = await axios.post('https://localhost:7218/api/Client/insert', client )
    return data
}

export const Update =async (id, client) => {
    let url = 'https://localhost:7218/api/Client/update/:' + id
    const { data } =await axios.put(url, { client })
    return data
}

// export const Delete =async (id) => {
//     let url = 'https://localhost:7218/api/Client/delete/' + id
//     return { data } =await axios.delete(url)
// }

