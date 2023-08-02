import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import CrTextInput from '../utilities/custom/CrTextInput';
import ProductService from '../services/productService';
import { toast } from "react-toastify"
import CrCheckbox from '../utilities/custom/CrCheckbox';
import { useDispatch } from "react-redux"
import { addProduct } from '../store/actions/productListActions';


const propTypes = {};

const defaultProps = {};

const ProductAdd = () => {

    const productService = new ProductService()
    const dispatch = useDispatch()

    const initialValues = {
        ad: "",
        fee: 10,
        a: "",
        termsAndConditions: false
    }

    const schema = Yup.object({
        ad: Yup.string().required("Ürün adı zorunludur"),
        fee: Yup.number().required("Ürün fiyatı zorunludur"),
        a: Yup.string(),
        termsAndConditions: Yup.boolean().oneOf([true], "Koşulları kabul etmeniz gerekir")
    })

    return (
        <div>
            <Formik
                initialValues={ initialValues }
                validationSchema={ schema }
                onSubmit={ (values) => {
                    const { fee, ad, a } = values
                    dispatch(addProduct({ fee, ad, a }))
                    toast.dark("Ürün Eklendi!")
                } }
            >
                { ({ values, setFieldValue }) => (
                    <Form className='ui form' style={ { textAlign: "start" } }>
                        <div className='two fields'>
                            <CrTextInput label="Ürün Adı" name="ad" className='ten wide required field' placeholder="Ürün Adınız ... " />
                            <CrTextInput label="Ürün Ücreti" className='six wide required field' name="fee" placeholder={ "Ürün fiyatı..." } />
                        </div>
                        <CrTextInput label="Açıklama" className='field' name="a" placeholder={ "Açıklamanızı giriniz..." } />
                        <CrCheckbox className={ "inline field required" } label={ "Sözleşmeyi onaylıyorum." } name={ "termsAndConditions" } changeFxn={ () => setFieldValue('termsAndConditions', !values.termsAndConditions) } values={ values } />
                        <button className='ui inverted button brown' type='submit' style={ { marginTop: "1rem", position: "relative", left: "45%", width: "fit-content" } }>Ekle <i className='add icon right inverted brown' /></button>
                    </Form>
                ) }
            </Formik>
        </div>
    );
}

ProductAdd.propTypes = propTypes;
ProductAdd.defaultProps = defaultProps;

export default ProductAdd;