import { GetAll, GetOne, Insert, Update } from './ClientAPI'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const clientState = {
    allClients: { clients: [] },
    currentClient: undefined,
    status: "idle"
}

export const fetchAllClient = createAsyncThunk("client-getAll", async (thunkAPI) => {
    const response = await GetAll()
    return response
})

export const fetchByIdFromServer = createAsyncThunk("client-getOne", async (thunkAPI, id) => {
    const response = await GetOne(id)
    return response
})

// export const fetchAllFromServer=createAsyncThunk("client-getAllClient", async (thunkAPI) => {
//     return await GetAll()
// })
// export const fetchByIdFromServer=createAsyncThunk("client-getClientById", async (id) => {
//     return await GetOne()
// })
export const fetch3 = createAsyncThunk("client-insert", async (client) => {
    const response = await Insert(client)
    return response
})
export const fetch4 = createAsyncThunk("client-updateClient", async (id, client) => {
    const response = await Update(id, client)
    return response
})
// const fetch5=createAsyncThunk("client-deleteClient", async (id) => {
// })

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
                state.currentClient = undefined
        },
        setCurrentClient: (state, action) => {//NOTE:setCurrentClient => payload:id//TODO: בדיקת תקינות
            state.currentClient = state.allClients.clients
                .find(client => client.id === action.payload)
        },
        updateClient: (state, action) => {//NOTE:updateClient => payload:user{same id}
            let index = state.allClients.clients
                .findIndex(client => client.id === action.payload.id)
            state.allClients.clients.splice(index, 1, action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllClient.fulfilled, (state, action) => {
            state.allClients.clients = action.payload
            state.status = "success"
        }).addCase(fetchAllClient.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchAllClient.pending, (state, action) => {
            state.status = "pending"
        })

            .addCase(fetchByIdFromServer.fulfilled, (state, action) => {
                state.currentClient = action.payload
                state.status = "success"
            }).addCase(fetchByIdFromServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchByIdFromServer.pending, (state, action) => {
                state.status = "pending"
            })

            .addCase(fetch3.fulfilled, (state, action) => {
                state.allClients.clients = [...state.allClients.clients, action.payload]
                state.status = "success"
            }).addCase(fetch3.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetch3.pending, (state, action) => {
                state.status = "pending"
            })

            .addCase(fetch4.fulfilled, (state, action) => {
                let index = state.allClients.clients
                    .findIndex(client => client.id === action.payload.id)
                state.allClients.clients.splice(index, 1, action.payload)
                state.status = "success"
            }).addCase(fetch4.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetch4.pending, (state, action) => {
                state.status = "pending"
            })
    }
})

export const { addClient, updateClient, setCurrentClient, delClient } = clientSlice.actions

export default clientSlice.reducer