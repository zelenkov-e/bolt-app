import React, { useState } from "react";
import Button from "../../common/componets/Button";
import Input from "../../common/componets/Input";
import ProgressBar from "../../common/componets/ProgressBar";
import { FormItems, ButtomsItems, CitiesOfEstonia, DefaultFormState, Phone, FormErrorMessages } from "../../common/constants";

import "./styles.scss";



type formOptions = { email: string, phone: string, code: string, isAgreeOfPolicy: boolean, city: string }
type errorOptions = { email: null | string, phone: null | string, checkbox: boolean }

const DriverForm = () => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [formState, setFormState] = useState<formOptions>(DefaultFormState)
    const [error, setError] = useState<errorOptions>({ email: null, phone: null, checkbox: false })

    const formIsActive = formState.email.length !== 0
        && formState.phone.length !== 0 && formState.isAgreeOfPolicy

    const sendForm = () => {
        setLoading(true)

        const { email, city, code, phone, isAgreeOfPolicy } = formState
        const data = {
            email: email,
            city: city,
            phone: code.concat(phone),
            isChecked: isAgreeOfPolicy
        }
        //--------------------------------imitation form submission---------------------//
        //handle Post request formIsNotActive && DriverApi.createQuestion(data)
        setTimeout(() => {
            setLoading(false)
            setFormState(DefaultFormState)
        }, 5000);
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()

        setError({
            email: formState.email.length === 0 ? FormErrorMessages.email : null,
            phone: formState.phone.length === 0 || formState.code === 'code' ? FormErrorMessages.phone : null,
            checkbox: !formState.isAgreeOfPolicy
        })
        formIsActive && sendForm()
    }

    const handleFormChange = (e: React.SyntheticEvent | React.ChangeEvent) => {
        const target = e.target as HTMLInputElement
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        setFormState({ ...formState, [name]: value });

        name === 'email' && setError({ ...error, email: null })
        name === 'phone' && setError({ ...error, phone: null })
        name === 'isAgreeOfPolicy' && setError({ ...error, checkbox: false })
    }

    return (
        <div className="container driver-form">
            <form className="form" onSubmit={handleSubmit}>
                {isLoading && <ProgressBar status="success" />}
                <div className="mb-3">
                    <div><b>Become a Bolt driver</b></div>
                    <div>If you have a multiple cars or drivers&nbsp;
                        <a href="/">sign up as a fleet owner</a>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><b>{FormItems.email}</b></label>
                    <Input
                        className={`form-control ${error.email ? 'driver-form__input-error' : ''}`}
                        placeholder="email"
                        type="email"
                        name="email"
                        value={formState.email}
                        handleChange={handleFormChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        {error.email
                            ? <div className="driver-form__error">{error.email}</div>
                            : <span>
                                <i className="fa fa-info-circle" />
                                &nbsp;&nbsp;This will be your username
                            </span>
                        }
                    </small>

                </div>
                <div className="mb-1">
                    <label htmlFor="exampleInputPassword1" className="form-label" ><b>{FormItems.phone}</b></label>
                    <div className="d-flex">
                        <div style={{ width: "100px", minWidth: "100px" }}>
                            <select
                                name="code"
                                className={`form-control ${error.phone ? 'driver-form__input-error' : ''}`}
                                value={formState.code}
                                onChange={handleFormChange}
                            >
                                {/*-------- use Api for getting Phone Codes------------------------*/}
                                {Phone.countries.map((country, index) =>
                                    <option key={index} value={country.code}>{country.code}</option>
                                )}
                            </select>
                        </div>
                        <Input
                            type="number"
                            className={`form-control ml-2 ${error.phone ? 'driver-form__input-error' : ''}`}
                            placeholder="phone"
                            name="phone"
                            value={formState.phone}
                            handleChange={handleFormChange}
                        />
                    </div>
                    <small id="emailHelp" className="form-text text-muted">
                        {error.phone ? <div className="driver-form__error">{error.phone}</div> : <div className="mb-4"></div>}
                    </small>
                </div>
                <div className="mb-3">
                    <label htmlFor="city"><b>City</b></label>
                    <select name='city' className="form-control" value={formState.city} onChange={handleFormChange}>
                        {/* -----------------------use Api for getting cities of Estonia-------------------------- */}
                        {CitiesOfEstonia.map((city, index) =>
                            <option key={index} value={city}>{city}</option>
                        )}
                    </select>
                </div>
                <div className="mb-3 form-check d-flex align-items-center">
                    <Input
                        className="form-check-input"
                        type="checkbox"
                        name="isAgreeOfPolicy"
                        checked={formState.isAgreeOfPolicy}
                        handleChange={handleFormChange}
                    />
                    <label className="form-check-label ml-2" htmlFor="isAgreeOfPolicy">
                        <span className={error.checkbox ? 'driver-form__error' : ''}>
                            I agree to Bolt's <a href="#">Teams of Service</a>&nbsp;and&nbsp;
                            <a href="#">Privacy Policy</a></span>
                    </label>
                </div>
                <Button className="btn-success btn-circle__btn-lg">{ButtomsItems.signUp}</Button>
            </form>
        </div>
    )
}

export default DriverForm;