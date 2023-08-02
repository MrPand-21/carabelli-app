import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartSummary from './CartSummary';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import { useDispatch, useSelector } from "react-redux"
import { LogIn, LogOut } from '../store/actions/loginActions';
import { Link } from "react-router-dom"


const propTypes = {};

const defaultProps = {};

const Navi = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const [{ cartItems }, { login }] = useSelector(state => [state.cart, state.login])
    const dispatch = useDispatch()

    function handleSignOut() {
        setIsAuthenticated(false);
        dispatch(LogOut())
    }

    function handleSignIn() {
        setIsAuthenticated(true);
        dispatch(LogIn())
    }

    return <div>
        <div className="ui small borderless attached stackable menu" style={ { height: "4rem" } }>
            <div className="ui container">
                <Link to="/" className="active item">
                    Home
                </Link>
                <div className="right menu">
                    { cartItems.length > 0 && login && <CartSummary /> }
                    { isAuthenticated ? <SignedIn signOut={ handleSignOut } /> : <SignedOut signIn={ handleSignIn } /> }

                </div>
            </div>
        </div>
    </div>;
}

Navi.propTypes = propTypes;
Navi.defaultProps = defaultProps;

export default Navi;