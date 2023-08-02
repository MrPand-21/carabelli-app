import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartSummary from './CartSummary';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import { useSelector } from "react-redux"


const propTypes = {};

const defaultProps = {};

const Navi = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const { cartItems } = useSelector(state => state.cart)

    function handleSignOut() {
        setIsAuthenticated(!isAuthenticated);

    }
    return <div>
        <div className="ui small borderless attached stackable menu" style={ { height: "4rem" } }>
            <div className="ui container">
                <a className="active item">
                    Home
                </a>
                <a className="item">
                    Messages
                </a>
                <div className="right menu">
                    { cartItems.length > 0 && <CartSummary /> }
                    { isAuthenticated ? <SignedIn signOut={ handleSignOut } /> : <SignedOut signIn={ handleSignOut } /> }

                </div>
            </div>
        </div>
    </div>;
}

Navi.propTypes = propTypes;
Navi.defaultProps = defaultProps;

export default Navi;