import { GetAll, GetOneById, GetOneByUserName, Insert, Update, Delete, Login, SignUp } from './ClientAPI'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const clientState = {
    allClients: {
        clients: [],
        status: 'idle'
    },
    currentClient: {
        status: "idle",
        client:undefined
    },
    
}

export const loginToWebSite = createAsyncThunk("client-login", async (client) => {
    const response = await Login(client)
    return response
})


export const signupToWebSite = createAsyncThunk("client-signup", async (client) => {
    const response = await SignUp(client)
    return response
})

export const fetchAllClientFromServer = createAsyncThunk("client-getAll", async (thunkAPI) => {
    const response = await GetAll()
    return response
})

export const fetchClientByIdFromServer = createAsyncThunk("client-getOneById", async (id) => {
    const response = await GetOneById(id)
    return response
})

export const fetchByUserNameFromServer = createAsyncThunk("client-getOneByUserName", async (name) => {
    const response = await GetOneByUserName(name)
    return response
})

export const insertClientForServer = createAsyncThunk("client-insert", async (client) => {
    const response = await Insert(client)
    return response
})

export const updateClientOnServer = createAsyncThunk("client-updateClient", async (id, client) => {
    const response = await Update(id, client)
    return response
})

export const deleteClientFromServer = createAsyncThunk("client-delete", async (id) => {
    const response = await Delete(id)
    return response
})


export const clientSlice = createSlice({
    name: 'client',
    initialState: clientState,
    reducers: {
        addClient: (state, action) => {//NOTE:addClient => payload:user
            state.allClients.clients.push(action.payload)
        },
        delClient: (state, action) => {//NOTE:delClient => payload:id
            let index = state.allClients.clients
                .findIndex(client => client.id === action.payload)
            state.allClients.clients.splice(index, 1)
            if (state.currentClient?.id === action.payload)
                state.currentClient.client = undefined
        },
        setCurrentClient: (state, action) => {//NOTE:setCurrentClient => payload:id//TODO: בדיקת תקינות
            state.currentClient.client = state.allClients.clients
                .find(client => client.id === action.payload)
        },
        updateClient: (state, action) => {//NOTE:updateClient => payload:user{same id}
            let index = state.allClients.clients
                .findIndex(client => client.id === action.payload.id)
            state.allClients.clients.splice(index, 1, action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllClientFromServer.fulfilled, (state, action) => {
            state.allClients.clients = action.payload
            state.allClients.status = "success"
        }).addCase(fetchAllClientFromServer.rejected, (state, action) => {
            state.allClients.status = "failed"
        }).addCase(fetchAllClientFromServer.pending, (state, action) => {
            state.allClients.status = "pending"
        })

        .addCase(loginToWebSite.fulfilled, (state, action) => {
            state.currentClient.client = action.payload
        })

        .addCase(fetchClientByIdFromServer.fulfilled, (state, action) => {
            state.currentClient.client = action.payload
        })

        .addCase(fetchByUserNameFromServer.fulfilled, (state, action) => {
            state.currentClient.client = action.payload
            state.status = "success"
        })
        .addCase(fetchByUserNameFromServer.rejected, (state, action) => {
            state.currentClient.client = action.payload
            state.status = "faild"
        })
        .addCase(fetchByUserNameFromServer.pending, (state, action) => {
            state.currentClient.client = action.payload
            state.status = "pending"
        })

        .addCase(insertClientForServer.fulfilled, (state, action) => {
            state.allClients.clients.push(action.payload)
        })

        .addCase(signupToWebSite.fulfilled, (state, action) => {
            state.allClients.clients.push(action.payload)
            state.currentClient.client = action.payload
        })

        .addCase(updateClientOnServer.fulfilled, (state, action) => {
            let index = state.allClients.clients
                .findIndex(client => client.id === action.payload.id)
            state.allClients.clients.splice(index, 1, action.payload)
        })

        .addCase(deleteClientFromServer.fulfilled, (state, action) => {
            let index = state.allClients.clients
                .findIndex(client => client.id === action.payload)
            state.allClients.clients.splice(index, 1)
            if ( state.currentClient.client?.id === action.payload)
                state.currentClient.client = undefined
        })
    }
})



export default clientSlice.reducer