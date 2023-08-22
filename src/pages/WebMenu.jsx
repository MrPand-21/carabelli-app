import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CrMenuItem from '../utilities/custom/style/CrMenuItem';

const propTypes = {};

const defaultProps = {};

const WebMenu = () => {

    const items = useRef(null)

    useEffect(() => {
        if (items != null) {
            Array.from(items.current.children).forEach((element, index) => {
                element.addEventListener("mousemove", () => {
                    items.current.dataset.activeIndex = index
                });
            });

        }
    }, [])

    useEffect(() => {
        const bgName = "bg-neutral-900"
        document.body.classList.add([bgName])
        return () => {
            document.body.classList.remove([bgName])
        }
    }, [])

    return (
        <div className='menu h-[80vh] flex items-center font-serif'>
            <div ref={ items } className='menu-items group relative z-10 peer'>
                <CrMenuItem href={ "" } name={ "home" } />
                <CrMenuItem href={ "" } name={ "shop" } />
                <CrMenuItem href={ "" } name={ "about" } />
                <CrMenuItem href={ "" } name={ "contact us" } />
            </div>
            <div className='bg-pattern h-[100vh] w-[100vw] absolute -left-[30rem] -top-12 z-0 
            transition-all peer-hover:bg-[length:11vmin_11vmin] duration-300 peer-hover:opacity-50
            peer-data-[active-index="0"]:bg-[0%_-25%]  peer-data-[active-index="1"]:bg-[0%_-50%]
            peer-data-[active-index="2"]:bg-[0%_-75%]  peer-data-[active-index="3"]:bg-[0%_-100%]'>
            </div>

            <div className='bg-image bg-[url("https://images.unsplash.com/photo-1692684583465-6230fa0ccb1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60")]
            !w-[100vmax] !h-[80vh] -translate-x-2.5 absolute z-0 left-0 top-0 bg-cover bg-[center_40%] opacity-40 transition-all duration-700 peer-hover:opacity-20 peer-hover:bg-[length:100vmax]
            peer-data-[active-index="0"]:bg-[center_47%]  peer-data-[active-index="1"]:bg-[center_55%]
            peer-data-[active-index="2"]:bg-[center_63%]  peer-data-[active-index="3"]:bg-[center_75%]'>

            </div>
        </div>
    );
}

WebMenu.propTypes = propTypes;
WebMenu.defaultProps = defaultProps;
// #endregion

export default WebMenu;