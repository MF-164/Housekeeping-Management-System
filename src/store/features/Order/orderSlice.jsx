
import { Delete, GetAll, GetOne, Insert, Update } from './OrderAPI'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const orderState = {
    allOrders: { orders: [] },
    currentOrder: null,
    status: "idle"
}

const fetchAllOrderFromServer = createAsyncThunk('Order-getAll', async (thunkAPI) => {
    const response = await GetAll()
    return response
})
const fetchOrderByIdFromServer = createAsyncThunk('Order-getOne', async (id) => {
    const response = await GetOne(id)
    return response
})

const insertOrderForServer = createAsyncThunk('Order-insert', async (order) => {
    const response = await Insert(order)
    return response
})

const updateOrderOnServer = createAsyncThunk('Order-update', async (id, order) => {
    const response = await Update(id, order)
    return response
})

const deleteOrderFromServer = createAsyncThunk('Order-delete', async (id) => {
    const response = await Delete(id)
    return response
})

export const orderSlice = createSlice({
    name: 'orderSlice',
    initialState: orderState,
    reducers: {
        // addOrder: (state, action) => {//NOTE:addOrder => payload:order
        //     state.allOrders.orders.push(action.payload)
        // },
        // delOrder: (state, action) => {//NOTE:delOrder => payload:id
        //     let index = state.allOrders.orders
        //         .findIndex(order => order.id === action.payload)
        //     state.allOrders.orders.splice(index, 1)
        // },
        updateCurrentOrder: (state, action) => {//NOTE:updateOrder => payload:order
            state.currentOrder = action.payload 
        }
        //TODO:do current order?
    },
    extraReducers: (builder) => {

        builder.addCase(fetchAllOrderFromServer.fulfilled, (state, action) => {
            state.allOrders.orders = action.payload
            state.status = "success"
        }).addCase(fetchAllOrderFromServer.rejected, (state, action) => {
            state.status = "failed"
        }).addCase(fetchAllOrderFromServer.pending, (state, action) => {
            state.status = "pending"
        })

        .addCase(fetchOrderByIdFromServer.fulfilled, (state, action) => {
            state.currentOrder = action.payload
        })

        .addCase(insertOrderForServer.fulfilled, (state, action) => {
            state.allOrders.orders.push(action.payload)
        })

        .addCase(updateOrderOnServer.fulfilled, (state, action) => {
            let index = state.allOrders.orders
                .findIndex(order => order.id === action.payload.id)
            state.allOrders.orders.splice(index, 1, action.payload)
        })

        .addCase(deleteOrderFromServer.fulfilled, (state, action) => {
            let index = state.allOrders.orders
                .findIndex(order => order.id === action.payload)
            state.allOrders.orders.splice(index, 1)
        })
    }
})

export const { updateCurrentOrder } = orderSlice.actions

export default orderSlice.reducer