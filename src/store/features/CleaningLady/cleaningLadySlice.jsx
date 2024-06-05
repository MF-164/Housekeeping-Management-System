import { setCurrentClient } from '../Client/clientSlice'
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

export const UpdateCleaningLadyOnServer = createAsyncThunk('cleaningLady-update', async (id, cleaningLady) => {
    const response = await Update(id, cleaningLady)
    return response
})


export const cleaningLadySlice = createSlice({
    name: 'cleaningLadySlice',
    initialState: cleaningLadyState,
    reducers: {
        addCleaningLady: (state, action) => {//NOTE:addCleaningLady => payload:lady
            state.allCleaningLadies.ladies.push(action.payload)
        },
        delCleaningLady: (state, action) => {//NOTE:delCleaningLady => payload:id
            let index = state.allCleaningLadies.ladies
                .findIndex(cleaningLady => cleaningLady.id === action.payload)
            state.allCleaningLadies.ladies.splice(index, 1)
        },
        updateCleaningLady: (state, action) => {//NOTE:updateCleaningLady => payload:lady{same id}
            let index = state.allCleaningLadies.ladies
                .findIndex(cleaningLady => cleaningLady.id === action.payload.id)
            state.allCleaningLadies.ladies.splice(index, 1, action.payload)
        }
    },
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
                setCurrentClient(action)
                state.status = "success"
            }).addCase(fetchCleaningLadyByIdFromServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchCleaningLadyByIdFromServer.pending, (state, action) => {
                state.status = "pending"
            })

            .addCase(insertCleaningLadyForServer.fulfilled, (state, action) => {
                addCleaningLady(action)
                state.status = "success"
            }).addCase(insertCleaningLadyForServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(insertCleaningLadyForServer.pending, (state, action) => {
                state.status = "pending"
            })

            .addCase(UpdateCleaningLadyOnServer.fulfilled, (state, action) => {
                updateCleaningLady(action)
                state.status = "success"
            }).addCase(UpdateCleaningLadyOnServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(UpdateCleaningLadyOnServer.pending, (state, action) => {
                state.status = "pending"
            })

            .addCase(deleteCleaningLadyFromServer.fulfilled, (state, action) => {
                delCleaningLady(action)
                state.status = "success"
            }).addCase(deleteCleaningLadyFromServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(deleteCleaningLadyFromServer.pending, (state, action) => {
                state.status = "pending"
            })
    }
})

export const { addCleaningLady, updateCleaningLady, delCleaningLady } = cleaningLadySlice.actions

export default cleaningLadySlice.reducer