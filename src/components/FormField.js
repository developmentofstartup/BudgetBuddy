import { FormControl, FormErrorMessage } from '@chakra-ui/react';
import React from 'react';
export default function FormField ({name, type, placeholder, autoComplete, formik}) {
    const inputClass = 'input_style rounded_12px px_18px py_12px text_md transition_default w-100';
    const errorClass = "form_error text_sm fw_semiBold transition_default";
    return(
        <FormControl className="formControl"
            isInvalid={!!formik.errors[name] && formik.touched[name]}>
            <input
                className={inputClass}
                type={type}
                placeholder={placeholder}
                name={name}
                autoComplete={autoComplete}
                {...formik.getFieldProps(name)}
            />
            <FormErrorMessage className={errorClass}>
                {formik.errors[name]}
            </FormErrorMessage>
        </FormControl>
    )
}