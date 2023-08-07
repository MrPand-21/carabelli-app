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
    src: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
};

/**
 * 
 */
const CrBigCard = ({ src, className }) => {
    return (
        <div className={ className }>
            <div className='aspect-[5/7] w-[30vmin] bg-black bg-opacity-10 rounded-[1vmin] absolute'>
                <img src={ src } className='object-cover rounded-[inherit] w-full h-full' />
            </div>
        </div>

    );
}

CrBigCard.propTypes = propTypes;
CrBigCard.defaultProps = defaultProps;
// #endregion

export default CrBigCard;