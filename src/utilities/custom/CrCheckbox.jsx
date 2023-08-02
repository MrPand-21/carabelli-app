import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage, useField } from "formik"

const propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    changeFxn: PropTypes.func,
    values: PropTypes.object
};

const defaultProps = {
    name: "",
    type: "checkbox",
    className: "",
    label: "",
    changeFxn: null,
    values: {}
};

const CrCheckbox = (...props) => {

    const { name, className, type, label, changeFxn, values } = props[0]
    const [field, meta] = useField(name)

    const [popup, setPopup] = useState(true)

    let classNameExtended = className;
    classNameExtended = meta.touched && meta.value == false ? classNameExtended + " error" : classNameExtended

    function handleClose() {
        setPopup(!popup)
        setTimeout(() => {
            setPopup(true)
        }, 10000)
    }

    return (
        <div className={ classNameExtended } { ...field } >

            <Field name={ name } render={ ({ field }) => (
                <div className="inline field required" style={ { textAlign: "center", marginTop: "2rem" } }>
                    <div className='ui checkbox brown'>
                        <input
                            { ...field }
                            checked={ values.termsAndConditions }
                            onChange={ changeFxn }
                            tabIndex="0"
                            type={ type }
                        />
                        <label>{ label }</label>
                    </div>

                </div>
            ) } type={ type } />

            { meta.touched && !!meta.value == false && popup ? (
                <div className={ "ui negative message mini" } style={ { position: "relative", left: "35%", width: "30%" } } >
                    <i className='close icon' onClick={ handleClose }></i>
                    <div className='header'>
                        <i className='attention icon' style={ { marginLeft: "-.5rem" } } />
                        { meta.error ? meta.error : "zort" }
                    </div>
                </div>
            ) : (null)
            }
        </div>
    );
}

CrCheckbox.propTypes = propTypes;
CrCheckbox.defaultProps = defaultProps;

export default CrCheckbox;