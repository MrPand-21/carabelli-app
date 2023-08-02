import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    signIn: PropTypes.func
};

const defaultProps = {
    signIn: false
};


const SignedOut = (props) => {
    let { signIn } = props
    return (
        <div className='ui item  '>
            <div className='ui buttons small '>
                <button className='ui very basic brown button ' onClick={ signIn }>Giriş Yap</button>
                <button className='ui brown button '>Kayıt Ol</button>
            </div>

        </div>
    );
}

SignedOut.propTypes = propTypes;
SignedOut.defaultProps = defaultProps;


export default SignedOut;