import { Delete, GetAll, GetOne, Insert, Update } from './HourAPI'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const hourState = {
    allHours: { hours: [] },
    status: "idle"
}
export const fetchAllHoursFromServer = createAsyncThunk('Hours-getAll', async (thunkAPI) => {
    const response = await GetAll()
    return response
})

export const fetchHourByIdFromServer = createAsyncThunk('Hours-getOne', async (id) => {
    const response = await GetOne(id)
    return response
})

export const insertHourForServer = createAsyncThunk('Hours-insert', async (hour) => {
    const response = await Insert(hour)
    return response
})

export const updateHourForServer = createAsyncThunk('Hours-update', async (id, hour) => {
    const response = await Update(id, hour)
    return response
})

export const deleteHourForServer = createAsyncThunk('Hours-delete', async (id) => {
    const response = await Delete(id)
    return response
})


export const hourSlice = createSlice({
    name: 'hourSlice',
    initialState: hourState,
        extraReducers: (builder) => {
            builder.addCase(fetchAllHoursFromServer.fulfilled, (state, action) => {
                state.allHours.hours = action.payload
                state.status = "success"
            }).addCase(fetchAllHoursFromServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchAllHoursFromServer.pending, (state, action) => {
                state.status = "pending"
            })

            .addCase(fetchHourByIdFromServer.fulfilled, (state, action) => {
                state.currentHour = action.payload
            })

            .addCase(insertHourForServer.fulfilled, (state, action) => {
               state.allHours.hours.push(action.payload)
            })

            .addCase(updateHourForServer.fulfilled, (state, action) => {
                let index = state.allHours.hours
                    .findIndex(hour => hour.id === action.payload.id)
                state.allHours.hours.splice(index, 1, action.payload)
            })

            .addCase(deleteHourForServer.fulfilled, (state, action) => {
                let index = state.allHours.hours
                    .findIndex(hour => hour.id === action.payload)
                state.allHours.hours.splice(index, 1)
            })
        }
    })


export default hourSlice.reducer