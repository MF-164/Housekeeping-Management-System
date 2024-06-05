import { configureStore } from '@reduxjs/toolkit'
import clientSlice from '../features/Client/clientSlice'
import cleaningLadySlice from '../features/CleaningLady/cleaningLadySlice'
import commentSlice from '../features/Comment/commentSlice'
import orderSlice from '../features/Order/orderSlice'
<<<<<<< HEAD
=======
import HourSlice from '../features/Hour/hourSlice'
>>>>>>> 64920042612a57ce99028590f60e21dcf683c910
import daySlice from '../features/Day/daySlice'


export const store = configureStore({
    reducer: {
        day: daySlice,
<<<<<<< HEAD
=======
        hour: HourSlice,
>>>>>>> 64920042612a57ce99028590f60e21dcf683c910
        order: orderSlice,
        client: clientSlice,
        comment: commentSlice,
        cleaningLady: cleaningLadySlice
    }
})