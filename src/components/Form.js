import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import Transition from "./Transition";



export const Form = () => {


    // Initial state for form values
    const initialState = {
        name: "",
        email: "",
        subject: "",
        description: "",
    }

    // useState hook for form management
    const [values, setState] = useState(initialState);
    const [isSubmit, setSubmitted] = useState(false);

    const handleSubmitted = () => {
        isSubmit ? setSubmitted(false) : setSubmitted(true);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prevState) => ({
            ...prevState, [name]: value
        }));
    }

    // reset the state back to initial value
    const clearState = () => {
        setState({...initialState});
    };

    const sendForm = (templateId) => {
        window.emailjs.sendForm('service_6t3w86w', templateId, '#myForm')
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           setSubmitted(true);
        }, function(error) {
           console.log('FAILED...', error);
           setSubmitted(false);
        });
    };

    

    const submit = (e) => {
        e.preventDefault();
        const templateId = 'template_9pokxi8';
        sendForm(templateId);
        // setSubmitted(true);
        console.log(values);
        clearState();
        // setSubmit(false);
    }

    return (
        <>
            <h1>Have specific questions or inquiries? Feel free to message me!</h1>
            <br/>
            <form id="myForm" onSubmit={submit}>
                <div className="field"> 
                        <label className="label has-text-white">From</label>
                    <div className="field-body">
                        <div className="field">
                            <p className="control is-expanded has-icons-left">
                                <input required name="name" className="input" type="text" placeholder="Name" 
                                    value={values.name} onChange={handleChange}
                                />
                                <span className="icon is-small is-left has-text-grey">
                                    <PersonIcon/>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control is-expanded has-icons-left has-icons-right">
                                <input required name="email" className="input is-success" type="email" placeholder="Email" 
                                    value={values.email} onChange={handleChange}
                                />
                                <span className="icon is-small is-left has-text-grey">
                                    <EmailIcon/>
                                </span>
                                <span className="icon is-small is-right has-text-grey">
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label has-text-white">Subject</label>
                    <div className="control">
                        <input  name="subject" className="input" type="text" placeholder="Potential Wedding Shoot"
                            value={values.subject} onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label has-text-white">Description</label>
                    <div className="control">
                        <textarea name="description" className="textarea" type="text" placeholder="On December 14, we will be having..."
                            value={values.description} onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-primary">Submit</button>
                    </div>
                </div>
            </form>
            {isSubmit ? 
                    <Transition> 
                        <div className="notification is-primary is-light mt-1">
                            <button onClick={handleSubmitted} className="delete"></button>
                            <strong>Response successfully submitted!</strong>
                        </div> 
                    </Transition>
                : 
                    ""
            }
        </>
    );


}