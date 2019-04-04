import Utils from '../utils/commonFuncs';
import { Button } from 'react-bootstrap';
import { useStateValue } from '../context/state';

const ProductCard = ({product}) => {
    
    const [ { cartItems }, dispatch ] = useStateValue();

    return (
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top img-fluid" src={ product.thumb } alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '1vh' }}>{ Utils.trim(product.title, 37) }</h5>
            <p className="card-text" style={{ fontSize: '1vh' }}>{ Utils.trim(product.description, 185) }</p>
            <Button className="btn btn-primary" onClick={ () => dispatch( { type: 'addToCart', cartItem: product } ) }>Add to cart</Button>
          </div>
        </div>
    )  
}

export default ProductCard;