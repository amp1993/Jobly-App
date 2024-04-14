import React, {useContext} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import JoblyContext from '../context/JoblyContext';

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

                        
                        <div className="search-button-container">
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

export default SearchField;