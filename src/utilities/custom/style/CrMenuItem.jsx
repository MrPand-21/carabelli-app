import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
    href: PropTypes.string,
    name: PropTypes.string
};

const defaultProps = {
    href: "",
    name: "Cr"
};

const CrMenuItem = ({ href, name }) => {
    return (
        <div href={ href } className='menu-item transition-opacity w-fit group-hover:opacity-30 hover:cursor-pointer hover:!opacity-100  text-white text-[clamp(4rem,5.5vw,5.4rem)] block decoration-0 capitalize'>
            <p className=''>
                { name }
            </p>
        </div>
    );
}

CrMenuItem.propTypes = propTypes;
CrMenuItem.defaultProps = defaultProps;
// #endregion

export default CrMenuItem;