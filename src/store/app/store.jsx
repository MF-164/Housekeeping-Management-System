import { configureStore } from '@reduxjs/toolkit'
import clientSlice from '../features/Client/clientSlice'
import cleaningLadySlice from '../features/CleaningLady/cleaningLadySlice'
import commentSlice from '../features/Comment/commentSlice'
import orderSlice from '../features/Order/orderSlice'
import hourSlice from '../features/Hour/hourSlice'
import daySlice from '../features/Day/daySlice'
import diarySlice from '../features/Diary/diarySlice'


export const store = configureStore({
    reducer: {
        day: daySlice,
        hour: hourSlice,
        order: orderSlice,
        diary: diarySlice,
        client: clientSlice,
        comment: commentSlice,
        cleaningLady: cleaningLadySlice
    }
})