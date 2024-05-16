const { createSlice } = require("@reduxjs/toolkit")
import { Delete, GetAll, GetOne, Insert, Update } from './ClientAPI'


const clientState = {
    allClients: { clients: [] },
    currentClient: undefined,
    status:"idle"
}

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
        builder.addCase(GetAll.fulfilled, (state, action) => {
            state.allClients.clients = action.payload
            state.status = "success"
        }).addCase(GetAll.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(GetAll.pending, (state, action) => {
            state.status = "pending"
        })

        .addCase(GetOne.fulfilled, (state, action) => {
            state.currentClient = action.payload
            state.status = "success"
        }).addCase(GetOne.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(GetOne.pending, (state, action) => {
            state.status = "pending"
        })
    }
})

export const { addClient, updateClient, setCurrentClient, delClient } = clientSlice.actions

export default clientSlice.reducer