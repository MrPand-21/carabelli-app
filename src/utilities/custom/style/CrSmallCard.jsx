import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {
    className: PropTypes.string,
    src: PropTypes.string
};

const defaultProps = {
    className: '',
    src: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
};

/**
 * 
 */
const CrSmallCard = ({ src, className }) => {
    return (
        <div className={ className }>
            <div className='aspect-[5/7] w-[12vmin] bg-black bg-opacity-10 
            rounded-[2vmin] absolute translate-x-1/2 '>
                <img src={ src } className='object-cover rounded-[inherit] w-full h-full opacity-90' />
            </div>
        </div>

    );
}

CrSmallCard.propTypes = propTypes;
CrSmallCard.defaultProps = defaultProps;
// #endregion

export default CrSmallCard;