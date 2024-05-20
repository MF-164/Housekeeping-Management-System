const { createSlice } = require("@reduxjs/toolkit")
import { Delete, GetAll, GetOne, Insert, Update } from './HourAPI'

const hourState = {
    allHours: { hours: [] },
    status: "idle"
}
const fetchAllFromServer = createAsyncThunk('Hours-getAll', async (thunkAPI) => {
    return GetAll()
})

const fetchByIdFromServer = createAsyncThunk('Hours-getOne', async (id) => {
    return GetOne()
})

export const hourSlice = createSlice({
    name: 'hourSlice',
    initialState: hourState,
    reducers: {
        addHour: (state, action) => {//NOTE:addHour => payload:hour
            state.allHours.hours.push(action.payload)
        },
        delHour: (state, action) => {//NOTE:delHour => payload:id
            let index = state.allHours.hours
                .findIndex(hour => hour.id === action.payload)
            state.allHours.hours.splice(index, 1)
        },
        updateHour: (state, action) => {//NOTE:updatehour => payload:hour{same id}
            let index = state.allHours.hours
                .findIndex(hour => hour.id === action.payload.id)
            state.allHours.hours.splice(index, 1, action.payload)
        },
        extraReducers: (builder) => {
            builder.addCase(fetchAllFromServer.fulfilled, (state, action) => {
                state.allHours.hours = action.payload
                state.status = "success"
            }).addCase(fetchAllFromServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchAllFromServer.pending, (state, action) => {
                state.status = "pending"
            })

                .addCase(fetchByIdFromServer.fulfilled, (state, action) => {
                    state.currentHour = action.payload
                    state.status = "success"
                }).addCase(fetchByIdFromServer.rejected, (state, action) => {
                    state.status = "failed"
                }).addCase(fetchByIdFromServer.pending, (state, action) => {
                    state.status = "pending"
                })
        }
    }
})

export const { addHour, updateHour, delHour } = hourSlice.actions

export default hourSlice.reducer