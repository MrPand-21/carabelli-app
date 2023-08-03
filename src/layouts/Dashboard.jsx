import React from 'react';
import PropTypes from 'prop-types';
import Navi from './Navi';
import Categories from './Categories';
import ProductList from '../pages/ProductList';
import { Route, Routes } from "react-router-dom"
import ProductDetail from '../pages/ProductDetail';
import { ToastContainer } from "react-toastify"
import ProductAdd from '../pages/ProductAdd';
import CartDetail from '../pages/CartDetail';
import WandNImage from '../pages/WandNImage';


const propTypes = {};

const defaultProps = {};

const Dashboard = () => {
    return (<div>
        <ToastContainer position="bottom-right" />
        <div className='ui grid'>
            <div className='row'>
                <div className=' three wide column'>
                    <Categories />
                </div>
                <div className='centered eleven wide column'>
                    <Routes>
                        <Route index Component={ ProductList } />
                        <Route exact path='/products' Component={ ProductList } />
                        <Route exact path='/products/:id' Component={ ProductDetail } />
                        <Route exact path='/products/add' Component={ ProductAdd } />
                        <Route exact path='/cart' Component={ CartDetail } />
                        <Route exact path='/style' Component={ WandNImage } />
                        <Route path="/style/wand" Component={ WandNImage } />
                    </Routes>

                </div>
            </div>
        </div>
    </div>)
}

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
// #endregion

export default Dashboard;