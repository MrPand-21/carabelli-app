import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    src: PropTypes.string
};

const defaultProps = {
    className: 'tile',
    src: ""
};

const CrGalleryTile = ({ children, className, src }) => {
    const [fullClassName, setFullClassName] = useState(className + " group rounded-xl absolute shadow-2xl shadow-cyan-800")



    return (
        <div className={ fullClassName }>
            <img src={ src } className='w-full h-full object-bottom saturate-150 object-cover border-[inherit] rounded-[inherit] group-hover:scale-110 opacity-10 blur-3xl invisible group-hover:visible group-hover:opacity-100 duration-500 transition-all group-hover:blur-0' />

        </div>)
        ;
}

CrGalleryTile.propTypes = propTypes;
CrGalleryTile.defaultProps = defaultProps;

export default CrGalleryTile;