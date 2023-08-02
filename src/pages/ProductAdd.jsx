import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const propTypes = {};

const defaultProps = {};

const ProductAdd = () => {
    const initialValues = {
        ad: "",
        fee: 10,
        a: "Açıklamanızı giriniz",
    }

    const schema = Yup.object({
        ad: Yup.string().required("Ürün adı zorunludur"),
        fee: Yup.number().required("Ürün fiyatı zorunludur"),
        a: Yup.string(),
    })

    return (
        <div>
            <Formik
                initialValues={ initialValues }
                validationSchema={ schema }
            >
                <Form className='ui form'>
                    <div className='inline fields'>

                    </div>
                </Form>

            </Formik>
        </div>
    );
}

ProductAdd.propTypes = propTypes;
ProductAdd.defaultProps = defaultProps;

export default ProductAdd;