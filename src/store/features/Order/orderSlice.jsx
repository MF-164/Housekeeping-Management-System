
import { GetAll, GetOne} from './OrderAPI'
const { createSlice, createAsyncThunk } = '@reduxjs/toolkit'
const orderState = {
    allOrders: { orders: [] },
    currentOrder: null,
    status: "idle"
}

const fetchAllFromServer = createAsyncThunk('Order-getAll', async (thunkAPI) => {
    return await GetAll()
})
const fetchByIdFromServer = createAsyncThunk('Order-getOne', async (id) => {
    return await GetOne()
})

export const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: orderState,
    reducers: {
        addOrder: (state, action) => {//NOTE:addOrder => payload:order
            state.allOrders.orders.push(action.payload)
        },
        delOrder: (state, action) => {//NOTE:delOrder => payload:id
            let index = state.allOrders.orders
                .findIndex(order => order.id === action.payload)
            state.allOrders.orders.splice(index, 1)
        },
        updateOrder: (state, action) => {//NOTE:updateOrder => payload:order{same id}
            let index = state.allOrders.orders
                .findIndex(order => order.id === action.payload.id)
            state.allOrders.orders.splice(index, 1, action.payload)
        }
        //TODO:do current order?
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllFromServer.fulfilled, (state, action) => {
            state.allOrders.orders = action.payload
            state.status = "success"
        }).addCase(fetchAllFromServer.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchAllFromServer.pending, (state, action) => {
            state.status = "pending"
        })

            .addCase(fetchByIdFromServer.fulfilled, (state, action) => {
                state.currentOrder = action.payload
                state.status = "success"
            }).addCase(fetchByIdFromServer.rejected, (state, action) => {
                state.status = "failed"
            }).addCase(fetchByIdFromServer.pending, (state, action) => {
                state.status = "pending"
            })

        // .addCase(Delete.fulfilled, (state, action) => {
        //     state.currentOrder = null;
        //     state.status = "success"
        // }).addCase(Delete.rejected, (state, action) => {
        //     state.status = "failed"
        // }).addCase(Delete.pending, (state, action) => {
        //     state.status = "pending"
        // })

        // .addCase(Insert.fulfilled, (state, action) => {
        //     state.allOrders.orders = action.payload
        //     state.status = "success"
        // }).addCase(Insert.rejected, (state, action) => {
        //     state.status = "failed"
        // }).addCase(Insert.pending, (state, action) => {
        //     state.status = "pending"
        // })

        // .addCase(Update.fulfilled, (state, action) => {
        //     state.allOrders.orders = action.payload
        //     state.status = "success"
        // }).addCase(Update.rejected, (state, action) => {
        //     state.status = "failed"
        // }).addCase(Update.pending, (state, action) => {
        //     state.status = "pending"
        // })
    }
})

export const { addOrder, updateOrder, delOrder } = orderSlice.actions

export default orderSlice.reducer