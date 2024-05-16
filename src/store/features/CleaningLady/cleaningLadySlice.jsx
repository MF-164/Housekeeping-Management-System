const { createSlice } = require("@reduxjs/toolkit")
import { Delete, GetAll, GetOne, Insert, Update } from './CleaningLadyAPI'

const cleaningLadyState = {
    allCleaningLadies: { ladies: [] },
    currentLady: undefined,
    status: "idle"
}

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
        builder.addCase(GetAll.fulfilled, (state, action) => {
            state.allCleaningLadies.ladies = action.payload
            state.status = "success"
        }).addCase(GetAll.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(GetAll.pending, (state, action) => {
            state.status = "pending"
        })

        .addCase(GetOne.fulfilled, (state, action) => {
            state.currentLady = action.payload
            state.status = "success"
        }).addCase(GetOne.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(GetOne.pending, (state, action) => {
            state.status = "pending"
        })

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