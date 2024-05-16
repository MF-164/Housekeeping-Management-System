const { createSlice } = require("@reduxjs/toolkit")
import { Delete, GetAll, GetOne, Insert, Update } from './DiaryAPI'

const diaryState = {
    allDiaries: { diaries: [] },
    currentDiary: undefined,
    status: "idle"
}

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
        builder.addCase(GetAll.fulfilled, (state, action) => {
            state.allDiaries.diaries = action.payload
            state.status = "success"
        }).addCase(GetAll.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(GetAll.pending, (state, action) => {
            state.status = "pending"
        })

        .addCase(GetOne.fulfilled, (state, action) => {
            state.currentDiary = action.payload
            state.status = "success"
        }).addCase(GetOne.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(GetOne.pending, (state, action) => {
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