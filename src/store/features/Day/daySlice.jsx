
import { Delete, GetAll, GetOneById, Insert, Update } from './DayAPI'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const dayState = {
    allDays: { days: [] },
    currentDay:undefined,
    status: "idle"
}

export const fetchAllDayFromServer = createAsyncThunk("day-getAllDay", async (thunkAPI) => {
    const response = await GetAll()
    return response
})
export const fetchDayByIdFromServer = createAsyncThunk("Day-getDayById", async (id) => {
    const response = await GetOneById(id)
    return response
})

export const insertDayForServer = createAsyncThunk("day-insertDay", async (day) => {
    const response = await Insert(day)
    return response
})
export const updateDayForServer = createAsyncThunk("day-updateDay", async (id, day) => {
    const response = await Update(id, day)
    return response
})
export const deleteDayForServer = createAsyncThunk("day-deleteDay", async (id) => {
    const response = await Delete(id)
    return response
})

export const daySlice = createSlice({
    name: 'daySlice',
    initialState: dayState,
    reducers: {
        updateCurrentDay: (state, action) => {
            state.currentDay = action.payload
        }
    },
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
                state.allDays.days.push(action.payload)
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

export const { updateCurrentDay } = daySlice.actions

export default daySlice.reducer
