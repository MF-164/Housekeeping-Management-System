import { GetAll, GetOneById, Delete, Insert, Update } from './CleaningLadyAPI'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const cleaningLadyState = {
    allCleaningLadies: { ladies: [] },
    currentLady: undefined,
    status: "idle"
}

export const fetchAllCleningLadysFromServer = createAsyncThunk('cleaningLady-getAll', async (thunkAPI) => {
    const response = await GetAll()
    return response
})

export const fetchCleaningLadyByIdFromServer = createAsyncThunk('cleaningLady-getOne', async (id) => {
    const response = await GetOneById(id)
    return response
})

export const insertCleaningLadyForServer = createAsyncThunk('cleaningLady-insert', async (cleaningLady) => {
    const response = await Insert(cleaningLady)
    return response
})

export const deleteCleaningLadyFromServer = createAsyncThunk('cleaningLady-delete', async (id) => {
    const response = await Delete(id)
    return response
})

export const updateCleaningLadyOnServer = createAsyncThunk('cleaningLady-update', async (id, cleaningLady) => {
    const response = await Update(id, cleaningLady)
    return response
})


export const cleaningLadySlice = createSlice({
    name: 'cleaningLadySlice',
    initialState: cleaningLadyState,

    extraReducers: (builder) => {
        builder.addCase(fetchAllCleningLadysFromServer.fulfilled, (state, action) => {
            state.allCleaningLadies.ladies = action.payload
            state.status = "success"
        }).addCase(fetchAllCleningLadysFromServer.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchAllCleningLadysFromServer.pending, (state, action) => {
            state.status = "pending"
        })

            .addCase(fetchCleaningLadyByIdFromServer.fulfilled, (state, action) => {
                state.currentLady = action.payload

            })

            .addCase(insertCleaningLadyForServer.fulfilled, (state, action) => {
                state.allCleaningLadies.ladies = [...state.allCleaningLadies.ladies, action.payload]
            })

            .addCase(updateCleaningLadyOnServer.fulfilled, (state, action) => {
                let index = state.allCleaningLadies.ladies
                    .findIndex(cleaningLady => cleaningLady.id === action.payload.id)
                state.allCleaningLadies.ladies.splice(index, 1, action.payload)
            })

            .addCase(deleteCleaningLadyFromServer.fulfilled, (state, action) => {
                let index = state.allCleaningLadies.ladies
                    .findIndex(cleaningLady => cleaningLady.id === action.payload)
                state.allCleaningLadies.ladies.splice(index, 1)
                if (state.currentLady?.id === action.payload)
                    state.currentLady = undefined
            })
    }
})



export default cleaningLadySlice.reducer