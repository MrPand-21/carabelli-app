import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage, useField } from "formik"

const propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string
};

const defaultProps = {
    name: "",
    placeholder: "",
    type: "text",
    className: "",
    label: ""
};

const CrTextInput = (...props) => {

    const { name, className, placeholder, type, label } = props[0]
    const [field, meta] = useField(name)

    const [popup, setPopup] = useState(true)

    let classNameExtended = className;
    classNameExtended = meta.touched && !!meta.error ? classNameExtended + " error" : classNameExtended


    function handleClose() {
        setPopup(!popup)
        setTimeout(() => {
            setPopup(true)
        }, 10000)
    }

    return (
        <div className={ classNameExtended } { ...field } >
            <label>{ label }</label>
            <Field name={ name } placeholder={ placeholder } type={ type } />
            { meta.touched && !!meta.error && popup ? (
                <div className={ "ui negative message mini" }>
                    <i className='close icon' onClick={ handleClose } style={ { marginLeft: "-.5rem" } }></i>
                    <div className='header'>
                        <i className='attention icon' style={ { marginLeft: "-.5rem" } } />
                        { meta.error ? meta.error : "zort" }
                    </div>
                </div>
            ) : (null) }
        </div>
    );
}

CrTextInput.propTypes = propTypes;
CrTextInput.defaultProps = defaultProps;

export default CrTextInput;