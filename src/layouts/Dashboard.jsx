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
import HoverCards from '../pages/HoverCards';
import ProfileSearcher from '../pages/ProfileSearcher';
import Gallery from '../pages/Gallery';
import MagicalText from '../pages/MagicalText';
import TwitchHover from '../pages/TwitchHover';
import StaggeredGrid from '../pages/StaggeredGrid';
import WebMenu from '../pages/WebMenu';
import Trail from '../pages/Trail';
import Expulsive from '../pages/Expulsive';


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
                        <Route path="/style/hover" Component={ HoverCards } />
                        <Route path="/style/searcher" Component={ ProfileSearcher } />
                        <Route path="/style/gallery" Component={ Gallery } />
                        <Route path="/style/magical-text" Component={ MagicalText } />
                        <Route path="/style/twitch-hover" Component={ TwitchHover } />
                        <Route path="/style/staggered-grid" Component={ StaggeredGrid } />
                        <Route path="/style/website-menu" Component={ WebMenu } />
                        <Route path="/style/trail" Component={ Trail } />
                        <Route path="/style/expulsive-text" Component={ Expulsive } />
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