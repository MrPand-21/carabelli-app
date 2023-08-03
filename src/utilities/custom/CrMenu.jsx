import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

const CrMenu = ({ children }) => {
    return <div className="invisible group-hover/style:visible z-10 border-[#a5673f]/60
                     border-2 text-slate-600 flex flex-row absolute top-full left-[-2px] rounded-3xl 
                     rounded-s-none bg-white h-[40rem] w-[50rem] shadow-2xl
                     after:w-[58px] after:h-0.5 after:bg-white after:content-[''] after:z-20 after:top-[-2px] after:left-0 after:absolute">
        { children }
    </div>;
}

CrMenu.propTypes = propTypes;
CrMenu.defaultProps = defaultProps;

export default CrMenu;