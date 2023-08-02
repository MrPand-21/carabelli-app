import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, redirect, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import { NavigationContext } from '../utilities/context/NavigationContext';

const propTypes = {};

const defaultProps = {};


const Categories = () => {

    const { login } = useSelector(state => state.login)
    const { activeTab, handleTabClick } = useContext(NavigationContext)
    const navigate = useNavigate()

    if (activeTab == "home") {

        let last = window.location.href.split("/").pop();

        if (last == "add")
            handleTabClick("add")
        else if (last == "products")
            handleTabClick("products")
        else if (last == "cart" && login == false) {
            navigate("/")
        }
        else if (last == "cart")
            handleTabClick("cart")
    }

    return (
        <div className="ui secondary vertical pointing menu">
            <Link to="/products" className={ "item " + (activeTab == "products" ? "active" : "") } onClick={ () => { handleTabClick("products") } }>
                Ürünler
            </Link>

            <Link to="/products/add" className={ "item " + (activeTab == "add" ? "active" : "") } onClick={ () => { handleTabClick("add") } }>
                Ürün Ekle
            </Link>

            { login ? <Link to="/cart" className={ "item" + (activeTab == "cart" ? " active" : "") } onClick={ () => handleTabClick("cart") }>
                Sepetim
            </Link> : <div className={ "item disabled" + (activeTab == "cart" ? " active" : "") }>
                Sepetim
            </div> }

        </div>
    );
}

Categories.propTypes = propTypes;
Categories.defaultProps = defaultProps;


export default Categories;