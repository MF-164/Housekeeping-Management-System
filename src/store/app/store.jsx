import { configureStore } from '@reduxjs/toolkit'
import clientSlice from '../features/Client/clientSlice'
import cleaningLadySlice from '../features/CleaningLady/cleaningLadySlice'
import commentSlice from '../features/Comment/commentSlice'
import orderSlice from '../features/Order/orderSlice'
import daySlice from '../features/Day/daySlice'


export const store = configureStore({
    reducer: {
        day: daySlice,
        order: orderSlice,
        client: clientSlice,
        comment: commentSlice,
        cleaningLady: cleaningLadySlice
    }
})