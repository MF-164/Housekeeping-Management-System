import { GetAll, GetOneById, GetOneByUserName, Insert, Update, Delete } from './ClientAPI'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const clientState = {
    allClients: { clients: [] },
    currentClient: undefined,
    status: "idle"
}

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
        builder.addCase(fetchAllClientFromServer.fulfilled, (state, action) => {
            state.allClients.clients = action.payload
            state.status = "success"
        }).addCase(fetchAllClientFromServer.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchAllClientFromServer.pending, (state, action) => {
            state.status = "pending"
        })

            .addCase(fetchClientByIdFromServer.fulfilled, (state, action) => {
                setCurrentClient(action)
                state.status = "success"
            }).addCase(fetchClientByIdFromServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchClientByIdFromServer.pending, (state, action) => {
                state.status = "pending"
            })

            .addCase(insertClientForServer.fulfilled, (state, action) => {
                addClient(action)
                state.status = "success"
            }).addCase(insertClientForServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(insertClientForServer.pending, (state, action) => {
                state.status = "pending"
            })

            .addCase(updateClientOnServer.fulfilled, (state, action) => {
                updateClient(action)
                state.status = "success"
            }).addCase(updateClientOnServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(updateClientOnServer.pending, (state, action) => {
                state.status = "pending"
            })

            .addCase(fetchByUserNameFromServer.fulfilled, (state, action) => {
                setCurrentClient(action)
                state.status = "success"
            }).addCase(fetchByUserNameFromServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchByUserNameFromServer.pending, (state, action) => {
                state.status = "pending"
            })

            .addCase(deleteClientFromServer.fulfilled, (state, action) => {
               delClient(action)
                state.status = "success"
            }).addCase(deleteClientFromServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(deleteClientFromServer.pending, (state, action) => {
                state.status = "pending"
            })
    }
})

export const { addClient, updateClient, setCurrentClient, delClient } = clientSlice.actions

export default clientSlice.reducer