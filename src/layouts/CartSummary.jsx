import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom"
import { useSelector } from "react-redux"

const propTypes = {};

const defaultProps = {};

const CartSummary = () => {

    const [isClicked, setIsClicked] = useState(false)
    let handleClick = () => {
        setIsClicked(!isClicked);
    }

    const { cartItems } = useSelector(state => state.cart)

    return (
        <div className='ui dropdown pointing item centered' onClick={ handleClick }>
            Sepetiniz <i className="dropdown icon"></i>
            { isClicked ? <div className='menu item ' style={ { left: "-2rem", width: "fit-content", top: "2.7rem", minWidth: "110%" } }>
                {
                    cartItems.map(cartItem => (
                        <div className='item' key={ cartItem.product.id } style={ { height: "fit-content" } }>
                            { cartItem.product.ad }
                            <span className='ui label  brown circled' style={ { marginLeft: ".5rem" } }>
                                { cartItem.quantity }
                            </span>
                        </div>
                    ))
                }
                {
                    cartItems.length > 0 && <div className='divider' style={ { position: "relative", width: "90%" } }></div>
                }

                <div className='item' style={ { width: "inherit", boxSizing: "content-box" } }>
                    <Link to="/cart">Sepete Git</Link>
                </div>


            </div> : null }
        </div>

    );
}

CartSummary.propTypes = propTypes;
CartSummary.defaultProps = defaultProps;


export default CartSummary;