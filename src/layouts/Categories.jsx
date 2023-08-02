import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {};

const defaultProps = {};


const Categories = () => {
    return (
        <div className="ui secondary vertical pointing menu">
            <a className="item active">
                Home
            </a>
            <a className="item">
                Messages
            </a>
            <a className="item">
                Friends
            </a>
        </div>
    );
}

Categories.propTypes = propTypes;
Categories.defaultProps = defaultProps;


export default Categories;