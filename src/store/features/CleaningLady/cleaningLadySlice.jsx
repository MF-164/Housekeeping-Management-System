import { GetAll, GetOne} from './CleaningLadyAPI'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const cleaningLadyState = {
    allCleaningLadies: { ladies: [] },
    currentLady: undefined,
    status: "idle"
}

export const fetchAllFromServer = createAsyncThunk('cleaningLady-getAll', async (thunkAPI) => {
    const response =  await GetAll()
    return response
})

export const fetchByIdFromServer = createAsyncThunk('cleaningLady-getOne', async (id) => {
    const response =  await GetOne(id)
    return response
})

// export const InsertForServer = createAsyncThunk('cleaningLady-insert',async(cleaningLady)=>{
//     return await Insert(cleaningLady)
// })

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
        builder.addCase(fetchAllFromServer.fulfilled, (state, action) => {
            state.allCleaningLadies.ladies = action.payload
            state.status = "success"
        }).addCase(fetchAllFromServer.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchAllFromServer.pending, (state, action) => {
            state.status = "pending"
        })

            // .addCase(fetchByIdFromServer.fulfilled, (state, action) => {
            //     state.currentLady = action.payload
            //     state.status = "success"
            // }).addCase(fetchByIdFromServer.rejected, (state, action) => {
            //     state.status = "failed"
            // }).addCase(fetchByIdFromServer.pending, (state, action) => {
            //     state.status = "pending"
            // })

        // .addCase(Insert.fulfilled, (state, action) => {
        //     state.allCleaningLadies.ladies = action
        //     state.status = "success"
        // }).addCase(Insert.rejected, (state, action) => {
        //     state.status = "failed"
        // }).addCase(Insert.pending, (state, action) => {
        //     state.status = "pending"
        // })

        // .addCase(Update.fulfilled, (state, action) => {
        //     state.allCleaningLadies.ladies = action
        //     state.status = "success"
        // }).addCase(Update.rejected, (state, action) => {
        //     state.status = "failed"
        // }).addCase(Update.pending, (state, action) => {
        //     state.status = "pending"
        // })

        // .addCase(Delete.fulfilled, (state, action) => {
        //     state.allCleaningLadies.ladies = action
        //     state.status = "success"
        // }).addCase(Delete.rejected, (state, action) => {
        //     state.status = "failed"
        // }).addCase(Delete.pending, (state, action) => {
        //     state.status = "pending"
        // })
    }
})

export const { addCleaningLady, updateCleaningLady, delCleaningLady } = cleaningLadySlice.actions

export default cleaningLadySlice.reducer