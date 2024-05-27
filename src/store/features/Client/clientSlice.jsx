import { GetAll, GetOne} from './ClientAPI'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const clientState = {
    allClients: { clients: [] },
    currentClient: undefined,
    status:"idle"
}

export const fetchAllClient = createAsyncThunk("client-getAll", async (thunkAPI) => {
    const response =  await GetAll()
    return response
})

export const fetchByIdFromServer = createAsyncThunk("client-getOne", async (thunkAPI, id) => {
    const response =  await GetOne(id)
    return response
})

// export const fetchAllFromServer=createAsyncThunk("client-getAllClient", async (thunkAPI) => {
//     return await GetAll()
// })
// export const fetchByIdFromServer=createAsyncThunk("client-getClientById", async (id) => {
//     return await GetOne()
// })
// const fetch3=createAsyncThunk("client-getClientById", async (client) => {
// })
// const fetch4=createAsyncThunk("client-updateClient", async (id, client) => {
// })
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
    }
})

export const { addClient, updateClient, setCurrentClient, delClient } = clientSlice.actions

export default clientSlice.reducer