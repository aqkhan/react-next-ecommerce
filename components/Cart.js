import { useStateValue } from '../context/state';

const Cart = () => {
    const [ { cartItems } ] = useStateValue();
    return (
        <h4 className="text-right">Cart { ( cartItems && cartItems.length ) || 0 }</h4>
    )
}

export default Cart;