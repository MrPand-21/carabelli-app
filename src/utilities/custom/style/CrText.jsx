import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.any,
    text: PropTypes.string,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
};

const defaultProps = {
    children: null,
    className: ' group-data-[is-hover="true"]:opacity-30 transition-opacity',
    onMouseLeave: () => { },
    onMouseEnter: () => { }
};

const CrText = ({ children, className, onMouseEnter, onMouseLeave }) => {

    let classNameExtended = className + defaultProps.className

    useEffect(() => {
        classNameExtended = className + defaultProps.className
    }, [className])

    return (
        <p className={ classNameExtended } onMouseEnter={ onMouseEnter } onMouseLeave={ onMouseLeave }>
            { children }
        </p>
    );
}

CrText.propTypes = propTypes;
CrText.defaultProps = defaultProps;
// #endregion

export default CrText;