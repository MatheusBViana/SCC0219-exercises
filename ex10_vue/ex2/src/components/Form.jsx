import React, { useState } from "react";
import './Form.css'
import Signos from './Signos';

function Forms() {
    
    const [values, setValues] = useState({
        fName: "",
        lName: "",
        email: "",
        birthday: "",
        sign: "",
    });

    const [submitted, setSubmitted] = useState(false)
    const [valid_email, set_valid_birthday] = useState(false)
    const [valid_birthday, setvalid_birthday] = useState(false)
    const [filled, set_filled] = useState(false)
    const regex_email = new RegExp(".br$|.edu$|.com$")
    const regex_birthday = /^([1-9]|0[1-9]|[12][0-9]|3[01])[/]([1-9]|0[1-9]|1[012])[/](19|20)\d\d$/

    const handle_fName = (event) => {
        setValues({...values, fName: event.target.value})
    }
    const handle_lName = (event) => {
        setValues({...values, lName: event.target.value})
    }
    const handle_Email = (event) => {
        setValues({...values, email: event.target.value})
        if (regex_email.test(event.target.value)) {
            set_valid_birthday(true);  
        } else {
            set_valid_birthday(false);
            setSubmitted(false);
        }
    }
    const handle_Birthday = (event) => {
        setValues({...values, birthday: event.target.value})
        if (regex_birthday.test(event.target.value)) {
            setvalid_birthday(true);  
        } else {
            setvalid_birthday(false);
            setSubmitted(false);
        }
    }
    const handle_Sign = (event) => {
        setValues({...values, sign: event.target.value})
    }

    const handle_Submit = (event) => {
        event.preventDefault();
        if (values.fName && values.lName && values.birthday && values.email) {
            set_filled(true);
        }
        setSubmitted(true);
    }

    return (
        <div className="form-container">
            {submitted && valid_email && filled && valid_birthday && values.sign !== "Signo" && values.sign.length > 0 ?
            <div className="success_page">Enviado</div> 
            : null}
            <form className="form-row" onSubmit={handle_Submit}>
                <div className="form-group col-6">
                    <input type="text" placeholder='Primeiro Nome' value={values.fName} 
                    onChange={handle_fName}/>
                    {submitted && !values.fName ? <div className="error_page">Nome Inválido</div> : null}
                </div>
                <div className="form-group col-6">
                    <input type="text" placeholder='Sobrenome' value={values.lName} 
                    onChange={handle_lName}/>
                </div>
                <div className="form-group col-12">
                    <input type="text" placeholder='Data de Nascimento' value={values.birthday} 
                    onChange={handle_Birthday}/>
                    {submitted && (!valid_birthday || !values.birthday) ?
                    <div className="error_page">Data Incorreta - Siga o formato DD/MM/AAAA</div>
                    : null}
                </div>
                <div className="form-group col-md-6">
                    <input type="text" placeholder='Email' value={values.email} 
                    onChange={handle_Email}/>
                    {submitted && (!valid_email || !values.email) ?
                    <div className="error_page">Formato de e-mail inválido</div>
                    : null}
                </div>
                <br></br>
                <br></br>

                <select className="form-group col-md-4" data-required value={values.sign} 
                    onChange={handle_Sign}>
                    <option>{Signos[0]}</option>
                    <option>{Signos[1]}</option>
                    <option>{Signos[2]}</option>
                    <option>{Signos[3]}</option>
                    <option>{Signos[4]}</option>
                    <option>{Signos[5]}</option>
                    <option>{Signos[6]}</option>
                    <option>{Signos[7]}</option>
                    <option>{Signos[8]}</option>
                    <option>{Signos[9]}</option>
                    <option>{Signos[10]}</option>
                    <option>{Signos[11]}</option>
                    <option>{Signos[12]}</option>
                </select>
                {submitted && (!values.sign || values.sign === "Signo") ? 
                <div className="error_page">Signo inválido.</div> 
                : null}
                <br></br>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
export default Forms;