import React, {useContext} from 'react';
import { Formik, Form, Field } from 'formik';
import JoblyContext from '../context/JoblyContext';
import './SearchField.css'

const SearchField = ({pathname}) =>{
    const {search } = useContext(JoblyContext);

    const handleSubmit = (values, {setSubmitting}) => {
        search(values.search, pathname);
        setSubmitting(false)
    };

    return (
        <>
        
            <div className="search-div">
            <div className="search-container">
                <Formik
                    initialValues={{ search: '' }}

                    onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form>

                            <label htmlFor="search"></label>
                            <Field type='text' name='search' className='field'></Field>

                        
                            <button type='submit' disabled={isSubmitting}>Submit</button>
                        
                        </Form>
                       
                       )}
                </Formik>
                </div>
                

        </div>
        </>
          
    )
};

export default SearchField;