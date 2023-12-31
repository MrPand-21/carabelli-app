import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CartSummary from './CartSummary';
import SignedOut from './SignedOut';
import SignedIn from './SignedIn';
import { useDispatch, useSelector } from "react-redux"
import { LogIn, LogOut } from '../store/actions/loginActions';
import { Link } from "react-router-dom"
import CrMenuItem from '../utilities/custom/CrMenuItem';
import CrMenu from '../utilities/custom/CrMenu';


const propTypes = {};

const defaultProps = {};

const Navi = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [activeItem, setActiveItem] = useState("default")

    if (activeItem == "default") {
        if (window.location.href.includes("style"))
            setActiveItem("style")
        else
            setActiveItem("home")
    }

    function handleActiveItem(activeItem) {
        setActiveItem(activeItem)
    }

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
        <div className="ui small borderless attached stackable menu z-0" style={ { height: "4rem" } }>
            <div className="ui container">
                <Link to="/" className={ "item " + (activeItem == "home" ? "active" : "") } onClick={ () => { handleActiveItem("home") } }>
                    Home
                </Link>
                <div className={ "item group/style relative hover:border-x-2 hover:border-[#a5673f]/60 hover:shadow-2xl" + (activeItem == "style" ? " active" : "") } style={ { color: "#a5673f" } }>
                    Style
                    <CrMenu>
                        <div className='flex flex-col basis-4/12'>
                            <CrMenuItem to="/style/wand" name="wand" basis={ "basis-1/6" } clickFxn={ () => { handleActiveItem("style") } } />
                            <CrMenuItem to="/style/hover" name="hover" basis={ "basis-1/6" } clickFxn={ () => { handleActiveItem("style") } } />
                            <CrMenuItem to="/style/searcher" name="searcher" basis={ "basis-1/6" } clickFxn={ () => { handleActiveItem("style") } } />
                            <CrMenuItem to="/style/gallery" name="gallery" basis={ "basis-1/6" } clickFxn={ () => { handleActiveItem("style") } } />
                            <CrMenuItem to="/style/magical-text" name="magical" basis={ "basis-1/6" } clickFxn={ () => { handleActiveItem("style") } } />
                            <CrMenuItem to="/style/twitch-hover" name="twitch" basis={ "basis-1/6" } clickFxn={ () => { handleActiveItem("style") } } />
                        </div>
                        <div className='flex flex-col basis-1/3'>
                            <CrMenuItem to="/style/staggered-grid" name="grid" basis={ "basis-1/6" } clickFxn={ () => { handleActiveItem("style") } } />
                            <CrMenuItem to="/style/website-menu" name="menu" basis={ "basis-1/6" } clickFxn={ () => { handleActiveItem("style") } } />
                            <CrMenuItem to="/style/trail" name="trail" basis={ "basis-1/6" } clickFxn={ () => { handleActiveItem("style") } } />
                            <CrMenuItem to="/style/expulsive-text" name="expulsive" basis={ "basis-1/6" } clickFxn={ () => { handleActiveItem("style") } } />
                        </div>
                    </CrMenu>
                </div>
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