import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import ProductService from '../services/productService';


const propTypes = {};

const defaultProps = {};


const ProductDetail = () => {
    let productService = new ProductService();
    let { id } = useParams()
    const [product, setProduct] = useState(productService.getById(id))
    useEffect(() => {
        setProduct(productService.getById(id))
    }, [product])
    return (
        <div className='ui card centered large raised fluid'>
            <div className='content'>
                <div className='header'>{ product.ad }</div>
                <div className="meta"> Fee : { product.fee } </div>
                <div className='description'>Id: { product.id }, Additional Information : { product.a } </div>
            </div>
            <div className='extra content'>
                <div className='ui two buttons'>
                    <div className='ui basic green button'>Add to Cart</div>
                    <div className='ui basic red button'>Remove from Fav</div>
                </div>
            </div>

        </div>
    );
}

ProductDetail.propTypes = propTypes;
ProductDetail.defaultProps = defaultProps;


export default ProductDetail;