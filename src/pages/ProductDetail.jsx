import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import ProductService from '../services/productService';
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from '../store/actions/cartActions';
import { toast } from 'react-toastify';


const propTypes = {};

const defaultProps = {};


const ProductDetail = () => {

    let { id } = useParams()
    const { products } = useSelector(state => state.products)
    let product = products.find(p => p.id == id);
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(product))
        toast.success(`${product.ad} eklendi!`)
    }

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product))
        toast.info(`${product.ad} sepetten çıkarıldı!`)
    }

    useEffect(() => {
        product = products.find(p => p.id == id);
    }, [products])

    return (
        <div className='ui card centered large raised fluid'>
            <div className='content'>
                <div className='header'>{ product.ad }</div>
                <div className="meta"> Fee : { product.fee } </div>
                <div className='description'>Id: { product.id }, Additional Information : { product.a } </div>
            </div>
            <div className='extra content'>
                <div className='ui two buttons'>
                    <div className='ui basic green button' onClick={ () => handleAddToCart() }>Add to Cart</div>
                    <div className='ui basic red button' onClick={ () => handleRemoveFromCart() }>Remove from Cart</div>
                </div>
            </div>

        </div>
    );
}

ProductDetail.propTypes = propTypes;
ProductDetail.defaultProps = defaultProps;


export default ProductDetail;