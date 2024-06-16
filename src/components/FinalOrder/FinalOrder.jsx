import { store } from '../../store/app/store'
import Order from '../../store/features/Order/Order';
import './FinalOrder.scss'
const FinalOrder = () => {
    let order = store.getState().order.currentOrder
   
    return (<div className='final'>
        <h1>Your order has been successfully placed.</h1>
        <Order order={order} />
        <h2>Thank you for visiting us</h2>
    </div>)
}
export default FinalOrder