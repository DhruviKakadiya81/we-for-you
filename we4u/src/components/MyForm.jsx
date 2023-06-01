import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';

export const MyForm = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('');



    const validate = values => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name,
            email,
            password
        },
        validate,
        validateOnChange: true,
        onSubmit: values => {
            // Handle form submission
            console.log(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(event) => {
                        formik.handleChange(event);
                        setemail(event.target.value);
                    }}
                    onBlur={formik.handleBlur}
                    value={email}
                />
                {formik.touched.email && formik.errors.email && (
                    <div>{formik.errors.email}</div>
                )}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(event) => {
                        formik.handleChange(event);
                        setpassword(event.target.value);
                    }}
                    onBlur={formik.handleBlur}
                    value={password}
                />
                {formik.touched.password && formik.errors.password && (
                    <div>{formik.errors.password}</div>
                )}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};
