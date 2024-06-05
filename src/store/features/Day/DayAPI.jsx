
export const GetAll =async ()=>{
    const { data } =await axios.get('https://localhost:7218/api/Day/getAll')
    return data
}
    

export const GetOne =async (id) =>{
    let url = 'https://localhost:7218/api/Day/getById/' + id
    const { data } =await axios.get(url)
    return data
}
    
export const Insert = async (day) => {
    const { data } =await axios.post('https://localhost:7218/api/Day/insert', { day })

}

export const Update = async (id, day) => {
    let url = 'https://localhost:7218/api/Day/update/' + id
    const { data } =await axios.put(url, { day })
}

export const Delete = async (id) => {
    let url = 'https://localhost:7218/api/Day/delete/' + id
    const { data } =await axios.delete(url)

}
