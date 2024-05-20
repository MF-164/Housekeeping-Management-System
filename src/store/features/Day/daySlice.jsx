
import {  GetAll, GetOne } from './DayAPI'
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const dayState = {
    allDays: { days: [] },
    status: "idle"
}

const fetchAllFromServer=createAsyncThunk("day-getAllDay", async (thunkAPI) => {
    return await GetAll()
})
const fetchByIdFromServer=createAsyncThunk("Day-getDayById", async (id) => {
    return await GetOne(id)
})

export const daySlice = createSlice({
    name: 'daySlice',
    initialState: dayState,
    reducers: {
        addDay: (state, action) => {//NOTE:addDay => payload:day
            state.allDays.days.push(action.payload)
        },
        delDay: (state, action) => {//NOTE:delDay => payload:id
            let index = state.allDays.days
                .findIndex(day => day.id === action.payload)
            state.allDays.days.splice(index, 1)
        },
        updateDay: (state, action) => {//NOTE:updateDay => payload:Day{same id}
            let index = state.allDays.days
                .findIndex(day => day.id === action.payload.id)
            state.allDays.days.splice(index, 1, action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllFromServer.fulfilled, (state, action) => {
            state.allDays.days = action.payload
            state.status = "success"
        }).addCase(fetchAllFromServer.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchAllFromServer.pending, (state, action) => {
            state.status = "pending"
        })

        .addCase(fetchByIdFromServer.fulfilled, (state, action) => {
            state.status = "success"
        }).addCase(fetchByIdFromServer.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchByIdFromServer.pending, (state, action) => {
            state.status = "pending"
        })

        // .addCase(Insert.fulfilled, (state, action) => {
        //     state.allDays.days = action
        //     state.status = "success"
        // }).addCase(Insert.rejected, (state, action) => {
        //     state.status = "failed"
        // }).addCase(Insert.pending, (state, action) => {
        //     state.status = "pending"
        // })

        // .addCase(Update.fulfilled, (state, action) => {
        //     state.allDays.days = action
        //     state.status = "success"
        // }).addCase(Update.rejected, (state, action) => {
        //     state.status = "failed"
        // }).addCase(Update.pending, (state, action) => {
        //     state.status = "pending"
        // })

        // .addCase(Delete.fulfilled, (state, action) => {
        //     state.allDays.days = action
        //     state.status = "success"
        // }).addCase(Delete.rejected, (state, action) => {
        //     state.status = "failed"
        // }).addCase(Delete.pending, (state, action) => {
        //     state.status = "pending"
        // })
    }
})

export const { addDay, updateDay, delDay } = daySlice.actions

export default daySlice.reducer
