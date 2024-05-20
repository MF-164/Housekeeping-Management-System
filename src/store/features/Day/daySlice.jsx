const { createSlice } = require("@reduxjs/toolkit")
import { Delete, GetAll, GetOne, Insert, Update } from './DayAPI'

const dayState = {
    allDays: { days: [] },
    status: "idle"
}

const fetchAllFromServer=createAsyncThunk("client-getAllClient", async (thunkAPI) => {
})
const fetchByIdFromServer=createAsyncThunk("client-getClientById", async (id) => {
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
        builder.addCase(GetAll.fulfilled, (state, action) => {
            state.allDays.days = action.payload
            state.status = "success"
        }).addCase(GetAll.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(GetAll.pending, (state, action) => {
            state.status = "pending"
        })

        .addCase(GetOne.fulfilled, (state, action) => {
            state.status = "success"
        }).addCase(GetOne.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(GetOne.pending, (state, action) => {
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
