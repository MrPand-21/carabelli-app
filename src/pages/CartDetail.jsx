import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/actions/cartActions';
import { toast } from 'react-toastify';


const propTypes = {};

const defaultProps = {};

const CartDetail = () => {

    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product))
        toast.error(`${product.ad} sepetten çıkarıldı!`)
    }

    return (
        <div className="ui divided relaxed items">
            { cartItems.map((cartItem) => (
                <div className="item" key={ cartItem.product.id }>

                    <div className="content ">
                        <a className="header">{ cartItem.product.ad }</a>
                        <div className="meta">
                            <span > Birim Fiyatı :{ cartItem.product.fee }</span>
                        </div>
                        <div className="description">
                            <p>{ cartItem.product.a }</p>
                        </div>
                        <div className="extra">
                            <div className="ui label brown"><i className="ticket alternate icon"></i> { cartItem.quantity } Adet</div>
                        </div>
                        <div className="extra">
                            <div className="ui right floated inverted red button" onClick={ () => handleRemoveFromCart(cartItem.product) }>
                                Remove From Cart
                                <i className="right chevron icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            )) }



        </div>
    );
}

CartDetail.propTypes = propTypes;
CartDetail.defaultProps = defaultProps;

export default CartDetail;