import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router"
import { NavigationContext } from '../utilities/context/NavigationContext';

const propTypes = {
    signOut: PropTypes.func
};

const defaultProps = {
    signOut: false
};

const SignedIn = (props) => {

    const { handleTabClick } = useContext(NavigationContext)
    let { signOut } = props
    const [isClicked, setIsClicked] = useState(false)
    let navigate = useNavigate()
    let handleClick = () => {
        setIsClicked(!isClicked);
    }
    return (
        <div>
            <div className='ui dropdown pointing item centered' onClick={ handleClick }>
                <i className='big user circle outline icon brown' ></i>
                <i className='dropdown icon' style={ { marginLeft: "-.5rem" } }></i>
                { isClicked ? <div className='menu item ' style={ { left: "0rem", width: "150%", top: "2.3rem" } }>
                    <a className='item'>
                        Categories
                    </a>
                    <a className='item' onClick={ () => {
                        handleClick("products");
                        signOut();
                        navigate("/");
                    } }>
                        Çıkış Yap
                    </a>
                </div> : null }
            </div>

        </div>
    );
}

SignedIn.propTypes = propTypes;
SignedIn.defaultProps = defaultProps;


export default SignedIn;