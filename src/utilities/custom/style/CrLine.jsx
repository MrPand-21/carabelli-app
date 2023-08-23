import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

const defaultProps = {
    children: null,
    className: " line flex flex-row justify-between"
};

const CrLine = ({ children, className }) => {

    let classNameExtended = className + defaultProps.className
    useEffect(() => {
        classNameExtended = className + defaultProps.className
    }, [className])

    return (
        <div className={ classNameExtended }>
            { children }
        </div>
    );
}

CrLine.propTypes = propTypes;
CrLine.defaultProps = defaultProps;
// #endregion

export default CrLine;