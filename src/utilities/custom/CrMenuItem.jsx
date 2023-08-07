import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
    clickFxn: PropTypes.func,
    to: PropTypes.string,
    name: PropTypes.string,
    basis: PropTypes.string,
    id: PropTypes.string
};

const defaultProps = {
    name: "Item",
    basis: "basis-1/4",
    id: ""
};

const CrMenuItem = (props) => {
    const { clickFxn, to, name, basis, id } = props

    return (<div className={ 'text-[3vw] group subpixel-antialiased capitalize text-center relative text-[#a5673f]/80 ' + basis }>
        <Link to={ to } className=' top-1/3 left-[17%] font-sans hover:animate-pulse z-20 opacity-75 
        hover:underline absolute hover:decoration-wavy hover:decoration-[#a5673f]/90 group'
            onClick={ clickFxn }>

            <div name={ name } className={ "hover-class-effect top-[23%] left-[7%] animate-pulse opacity-30 absolute"
                + " z-1000 invisible w-full h-full inset-1 bg-sky-200 skew-y-12 group-hover:visible" }></div>
            <div className="relative z-100">
                { name }
            </div>



        </Link>

    </div>);
}

CrMenuItem.propTypes = propTypes;
CrMenuItem.defaultProps = defaultProps;

export default CrMenuItem;