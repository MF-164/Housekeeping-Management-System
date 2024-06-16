import axios from "axios"

export const GetAll = async () => {
    const { data } = await axios.get('https://localhost:7218/api/Client/getAll')
    return data
}

export const GetOneById = async (id) => {
    let url = 'https://localhost:7218/api/Client/getById/' + id
    const { data } = await axios.get(url)
    return data
}
export const GetOneByUserName = async (userName) => {

    let url = 'https://localhost:7218/api/Client/getByUserName/' + userName
    const {data} = await axios.get(url)
    if (data === "")
        return null
    else
        return data
}

export const Insert = async (client) => {
    console.log("api", { client });
    const { data } = await axios.post('https://localhost:7218/api/Client/insert', client)
    return data
}

export const Update = async (id, client) => {
    let url = 'https://localhost:7218/api/Client/update/' + id
    const { data } = await axios.put(url, client)
    return data
}

export const Delete = async (id) => {
    let url = 'https://localhost:7218/api/Client/delete/' + id
    const { data } = await axios.delete(url)
    return data
}

export const Login = async (client) =>{
    const {data} = await axios.post('https://localhost:7218/api/Client/login',client)
    return data
}

export const SignUp = async (client) =>{
    const {data} = await axios.post('https://localhost:7218/api/Client/signup',client)
    return data
}
