import React, {useContext, useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate,useParams } from 'react-router-dom';
import JoblyContext from "../context/JoblyContext";

const ProfileForm = () => {
    const navigate = useNavigate();     
    const {user, updateUserProfile} = useContext(JoblyContext);
    const {username} = useParams();



    useEffect(function isUserLoggedIn() {

        async function checkIfUserLoggedIn() {
            if (!user) {
              navigate('/')
            }
        }
        checkIfUserLoggedIn();
    }, []);


    const initialValues = {
        'firstName': user.firstName,
        'lastName': user.lastName,
        'email':user.email,

    };

    const fieldsToValidate = ['firstName','lastName',
    'email'];


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    const handleSubmit = async (values, {setSubmitting}) => {
        await updateUserProfile(username, values);
        setSubmitting(false)
        navigate('/')
        };  
 

    return (
        <>
        <h1 className="signup-title">Sign Up</h1>
        <div className="form-div">
            <div className="form-container">
                <Formik
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
                           

                            <label htmlFor="firstName">First Name:</label>
                            <Field type='text' name='firstName' className='field'></Field>
                            <ErrorMessage name="firstName" component='div' className="error-message"></ErrorMessage>

                            <label htmlFor="lastName">Last Name:</label>
                            <Field type='text' name='lastName'className='field'></Field>
                            <ErrorMessage name="lastName" component='div' className="error-message"></ErrorMessage>

                            <label htmlFor="email">Email:</label>
                            <Field type='text' name='email' className='field'></Field>
                            <ErrorMessage name="email" component='div' className="error-message"></ErrorMessage>


                          
                        <div className="button-container">
                            <button type='submit' disabled={isSubmitting} onSubmit={handleSubmit}>Submit</button>
                        </div>
                        
                        </Form>
                       
                       )}
                </Formik>

            </div>
        </div>
        </>
        
    )
};


export default ProfileForm