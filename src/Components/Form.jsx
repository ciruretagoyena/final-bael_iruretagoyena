import React, { useState } from "react";
import { useFormik } from 'formik'
import * as Yup from 'yup'

const inputs = [
    { id: 1, type: "text", placeholder: "Ingrese su Nombre", name: "name" },
    { id: 2, type: "text", placeholder: "Ingrese su Email", name: "email" }
]

const Form = () => {
    const getInitialValues = () => ({
        name: "",
        email: ""
    })

    const [ view, setView ] = useState("form")

    const getValidationSchema = () => (
        Yup.object().shape({
            name: Yup.string()
                .min(5, 'Tu nombre debe tener 5 caracteres como mínimo.')
                .required("Campo Obligatorio"),
            email: Yup.string()
                .email("Debes ingresar un email válido.")
                .required('Campo Obligatorio')
        })
    )

    const onSubmit = (values) => {
        console.log(values)
        setView("message");
    }

    const { values, setFieldValue, errors, handleSubmit } = useFormik({
        initialValues: getInitialValues(),
        validationSchema: getValidationSchema(),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit
    })

    return (
        <div className="container">
            { 
                view === "form" ? (
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className="form"
                        >
                            {
                                inputs.map(input => (
                                    <div key={input.id} className="input-container">
                                        <input
                                            name={input.name}
                                            placeholder={input.placeholder}
                                            type={input.type}
                                            value={values[input.name]}
                                            onChange={(e) => setFieldValue(input.name, e.target.value)}
                                        />
    
                                        { 
                                            errors[input.name] && (
                                                <div className="error">
                                                    {errors[input.name]}
                                                </div>
                                            )
                                        }
                                    </div>
                                ))
                            }
    
                            <div className="button-container">
                                <button type='submit' className="submit-button">Enviar</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="success">
                        <div className="success-message">
                            Tus datos fueron enviados con éxito!
                        </div>
                        <div className="thanks-message">
                            <strong>Gracias {values.name}, te contactaremos cuanto antes vía email!</strong>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Form;
