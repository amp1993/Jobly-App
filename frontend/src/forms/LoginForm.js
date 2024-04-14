import React, {useContext} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useNavigate} from 'react-router-dom';
import JoblyContext from "../context/JoblyContext";
import './FormStyle.css'


const LoginForm = () => {
    const navigate = useNavigate();
    const {login} = useContext(JoblyContext);

    const initialValues = {
        'username': '',
        'password': ''
    };

    const fieldsToValidate = ['username', 'password'];



    const handleSubmit = async (values, {setSubmitting}) => {
        let result = await login(values);
        setSubmitting(false)
        navigate('/')
        }; 


    return (
        <>
          <h1 className="login-title">Log In</h1>
            <div className="form-div">
            <div className="form-container"><Formik
                    initialValues={initialValues}
                    validate={values => {
                        const errors = {};
                        fieldsToValidate.forEach(field => {
                            if (!values[field]) {
                                errors[field] = 'required'
                            }
                        })
                        return errors;
                    }}
                    onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form>

                            <label htmlFor="username">Username</label>
                            <Field type='text' name='username' className='field'></Field>
                            <ErrorMessage name="username" component='div' className="error-message"></ErrorMessage>

                            <label htmlFor="password">Password</label>
                            <Field type='text' name='password' className='field'></Field>
                            <ErrorMessage name="password" component='div' className="error-message"></ErrorMessage>
                        
                        <div className="button-container">
                            <button type='submit' disabled={isSubmitting}>Submit</button>
                        </div>
                        
                        </Form>
                       
                       )}
                </Formik>
                </div>
                

        </div>
        </>
          
    )
};

export default LoginForm;