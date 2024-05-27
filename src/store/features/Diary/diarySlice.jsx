
import {GetAll, GetOne } from './DiaryAPI'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const diaryState = {
    allDiaries: { diaries: [] },
    currentDiary: undefined,
    status: "idle"
}

const fetchAllFromServer = createAsyncThunk('Diary-getAll', async (thunkAPI) => {
    const response =  await GetAll()
    return response
})

const fetchByIdFromServer = createAsyncThunk('Diary-getOne', async (thunkAPI,id) => {
    const response =  await GetOne(id)
    return response
})

export const diarySlice = createSlice({
    name: 'diarySlice',
    initialState: diaryState,
    reducers: {
        addDiary: (state, action) => {//NOTE:addDiary => payload:lady
            state.allDiaries.diaries.push(action.payload)
        },
        delDiary: (state, action) => {//NOTE:delDiary => payload:id
            let index = state.allDiaries.diaries
                .findIndex(diary => diary.id === action.payload)
            state.allDiaries.diaries.splice(index, 1)
        },
        updateDiary: (state, action) => {//NOTE:updateDiary => payload:lady{same id}
            let index = state.allDiaries.diaries
                .findIndex(diary => diary.id === action.payload.id)
            state.allDiaries.diaries.splice(index, 1, action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllFromServer.fulfilled, (state, action) => {
            state.allDiaries.diaries = action.payload
            state.status = "success"
        }).addCase(fetchAllFromServer.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchAllFromServer.pending, (state, action) => {
            state.status = "pending"
        })

            .addCase(fetchByIdFromServer.fulfilled, (state, action) => {
                state.currentDiary = action.payload
                state.status = "success"
            }).addCase(fetchByIdFromServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchByIdFromServer.pending, (state, action) => {
                state.status = "pending"
            })

        // .addCase(Insert.fulfilled, (state, action) => {
        //     state.allDiaries.diaries = action
        //     state.status = "success"
        // }).addCase(Insert.rejected, (state, action) => {
        //     state.status = "failed"
        // }).addCase(Insert.pending, (state, action) => {
        //     state.status = "pending"
        // })

        // .addCase(Update.fulfilled, (state, action) => {
        //     state.allDiaries.diaries = action
        //     state.status = "success"
        // }).addCase(Update.rejected, (state, action) => {
        //     state.status = "failed"
        // }).addCase(Update.pending, (state, action) => {
        //     state.status = "pending"
        // })

        // .addCase(Delete.fulfilled, (state, action) => {
        //     state.allDiaries.diaries = action
        //     state.status = "success"
        // }).addCase(Delete.rejected, (state, action) => {
        //     state.status = "failed"
        // }).addCase(Delete.pending, (state, action) => {
        //     state.status = "pending"
        // })
    }
})

export const { addDiary, updateDiary, delDiary } = diarySlice.actions

export default diarySlice.reducer