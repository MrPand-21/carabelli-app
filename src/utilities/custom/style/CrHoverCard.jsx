import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
};

const defaultProps = {
};

const CrHoverCard = (props) => {

    const { children } = props



    return (<div className='hover-card relative  rounded-2xl aspect-[6/5]
    h-[14.5rem] cursor-pointer before:absolute before:top-0 before:left-0 before:w-full 
    before:h-full before:rounded-xl shadow-2xl shadow-sky-800/20  blur-sky-800/20 
    
    '>
        <div className='hover-card-border absolute top-0 left-0 w-full h-full rounded-xl z-2 bg-gradient-radial
         bg-opacity-10 from-white/20 z-1 via-slate-300/5 from-40% via-60% to-90% to-neutral-800/5 
        opacity-0 transition-opacity group-hover:opacity-100 duration-200'></div>
        <div className='hover-card-content z-2 relative rounded-[inherit] bg-neutral-800 aspect-[6/5] h-[14.2rem] m-[2px]'>
            { children }
        </div>
        <div className='absolute top-0 left-0  rounded-[inherit] w-full h-full
    before:absolute before:top-0 before:left-0 before:w-full 
    before:h-full before:rounded-[inherit] before:bg-gradient-radial before:bg-opacity-0
    before:from-white/10 before:via-slate-300/5 before:from-10% before:via-50% before:to-80% before:to-neutral-800/5 
    before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500'></div>

    </div>);
}

CrHoverCard.propTypes = propTypes;
CrHoverCard.defaultProps = defaultProps;


export default CrHoverCard;