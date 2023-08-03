import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
    clickFxn: PropTypes.func,
    to: PropTypes.string,
    name: PropTypes.string,
    basis: PropTypes.string
};

const defaultProps = {
    name: "Item",
    basis: "basis-1/4"
};

const CrMenuItem = (props) => {
    const { clickFxn, to, name, basis } = props
    return (<div className={ 'text-[3vw] group subpixel-antialiased capitalize text-center relative text-[#a5673f]/80 ' + basis }>
        <Link to={ to } className=' top-1/3 left-[17%] font-sans hover:animate-pulse z-20 opacity-75 
        hover:underline absolute hover:decoration-wavy hover:decoration-[#a5673f]/90 peer'
            onClick={ clickFxn }>
            { name }
        </Link>
        <div className='left-[17%] top-[47%] animate-pulse opacity-30 absolute z-10 
        invisible inset-1 w-32 h-10 bg-sky-200 -skew-y-12 peer-hover:visible'></div>

    </div>);
}

CrMenuItem.propTypes = propTypes;
CrMenuItem.defaultProps = defaultProps;

export default CrMenuItem;