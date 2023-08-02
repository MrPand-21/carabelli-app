import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductService from '../services/productService';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from '../store/actions/cartActions';
import { toast } from "react-toastify"

const propTypes = {};

const defaultProps = {};

const ProductList = () => {

    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)

    function handleAddToCart(product) {
        dispatch(addToCart(product))
        toast.success(`${product.ad} sepete eklendi!`)
    }


    return (<table className='ui fitted striped single line very basic padded table'>
        <thead>
            <tr>
                <th className='four wide'>
                    Ad
                </th>
                <th className='four wide'>
                    Ücret
                </th>
                <th className='six wide'>
                    Açıklama
                </th>
                <th className='two wide'>
                </th>
            </tr>
        </thead>
        <tbody>
            { products.map(product => (
                <tr key={ product.id } >
                    <td><Link to={ `/products/${product.id}` }> { product.ad }</Link>

                    </td>
                    <td >
                        { product.fee }
                    </td>
                    <td >
                        { product.a }
                    </td>
                    <td className='ui labeled button small centered' style={ { marginTop: "5%" } } tabIndex={ 0 } onClick={ () => handleAddToCart(product) }>
                        <div className='ui button basic brown  '> sepete ekle</div>
                        <div className='ui icon button brown left pointing label'>
                            <i className='add icon '></i>
                        </div>

                    </td>
                </tr>
            )) }
        </tbody>

    </table>);
}

ProductList.propTypes = propTypes;
ProductList.defaultProps = defaultProps;

export default ProductList;