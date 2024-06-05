
import { Delete, GetAll, GetOne, Insert, Update } from './DayAPI'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const dayState = {
    allDays: { days: [] },
    status: "idle"
}

const fetchAllDayFromServer = createAsyncThunk("day-getAllDay", async (thunkAPI) => {
    const response = await GetAll()
    return response
})
const fetchDayByIdFromServer = createAsyncThunk("Day-getDayById", async (id) => {
    const response = await GetOne(id)
    return response
})

const insertDayForServer = createAsyncThunk("day-insertDay", async (day) => {
    const response = await Insert(day)
    return response
})
const updateDayForServer = createAsyncThunk("day-updateDay", async (id, day) => {
    const response = await Update(id, day)
    return response
})
const deleteDayForServer = createAsyncThunk("day-deleteDay", async (id) => {
    const response = await Delete(id)
    return response
})

export const daySlice = createSlice({
    name: 'daySlice',
    initialState: dayState,
    extraReducers: (builder) => {
        builder.addCase(fetchAllDayFromServer.fulfilled, (state, action) => {
            state.allDays.days = action.payload
            state.status = "success"
        }).addCase(fetchAllDayFromServer.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchAllDayFromServer.pending, (state, action) => {
            state.status = "pending"
        })

        .addCase(fetchDayByIdFromServer.fulfilled, (state, action) => {
            state.currentDay = action.payload
        })

        .addCase(insertDayForServer.fulfilled, (state, action) => {
           // state.allDays.days.push(action.payload)
        state.allDays.days=[...state.allDays.days,action.payload]
        })

        .addCase(updateDayForServer.fulfilled, (state, action) => {
            let index = state.allDays.days
                .findIndex(day => day.id === action.payload.id)
            state.allDays.days.splice(index, 1, action.payload)
        })

        .addCase(deleteDayForServer.fulfilled, (state, action) => {
            let index = state.allDays.days
                .findIndex(day => day.id === action.payload)
            state.allDays.days.splice(index, 1)
        })
    }
})

export default daySlice.reducer
