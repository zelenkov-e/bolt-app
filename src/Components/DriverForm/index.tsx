import React, { useState } from "react";
import Button from "../../common/componets/Button";
import Input from "../../common/componets/Input";
import ProgressBar from "../../common/componets/ProgressBar";

import { FormItems, ButtomsItems, CitiesOfEstonia, DefaultFormState } from "../../common/constants";


import "./styles.scss";

const DriverForm = () => {
    const [isLoading, setLoading] = useState(false)
    const [formState, setFormState] = useState(DefaultFormState)

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setLoading(true)
        //imitation form submission
        setTimeout(() => {
            setLoading(false)
            setFormState(DefaultFormState)
        }, 5000);
        //handle Post request DriverApi.createQuestion(formState)
    }

    const handleFormChange = (e: React.SyntheticEvent | React.ChangeEvent) => {
        const target = e.target as HTMLInputElement
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        setFormState({ ...formState, [name]: value });
    }

    return (
        <div className="container driver-form">
            <form onSubmit={handleSubmit}>
                {isLoading && <ProgressBar status="success" />}
                <div>
                    <div><b>Become a Bolt driver</b></div>
                    <div>If you have a multiple cars or drivers&nbsp;
                        <a href="#">sign up as a fleet owner</a>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"><b>{FormItems.email}</b></label>
                    <Input placeholder="email" type="email" name="email" value={formState.email} handleChange={handleFormChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" ><b>{FormItems.phone}</b></label>
                    <Input placeholder="phone" name="phone" value={formState.phone} handleChange={handleFormChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="city"><b>City</b></label>
                    <select name='city' className="form-control" value={formState.city} onChange={handleFormChange}>
                        {/* use Api for getting cities of Estonia */}
                        {CitiesOfEstonia.map((item, index) =>
                            <option key={index} value={item}>{item}</option>
                        )}
                    </select>
                </div>
                <div className="mb-3 form-check">
                    <Input
                        className="form-check-input"
                        type="checkbox"
                        name="isAgreeOfPolicy"
                        checked={formState.isAgreeOfPolicy}
                        handleChange={handleFormChange}
                    />
                    <label className="form-check-label" htmlFor="isAgreeOfPolicy">
                        <span>I agree to Bolt's <a href="#">Teams of Service</a>&nbsp;and&nbsp;
                            <a href="#">Privacy Policy</a></span>
                    </label>
                </div>
                <Button className="btn-success btn-circle__btn-lg">{ButtomsItems.signUp}</Button>
            </form>
        </div>
    )
}

export default DriverForm;