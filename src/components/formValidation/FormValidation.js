import React, {Component} from 'react';
import './FormValidation.css'
import FormErrors from "./FormErrors";

class FormValidation extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
            // text error UI
            formErrors:{emil:'',password:''},
            // valid field bool
            emailValid: false,
            passwordValid:false,
            formValid:false
        }
    }
    onChangeSignUp=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        this.setState({[name]:value},
            ()=>{this.validateField(name,value)});
    }

    validateField=(fieldName,value)=>{
        let formErrorObject= this.state.formErrors;
        let emailValid= this.state.emailValid;
        let passwordValid= this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid=/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
                formErrorObject.emil=emailValid ? '' : 'invalid email';
                break;
            case 'password':
                passwordValid=value.length>=6;
                formErrorObject.password=passwordValid ? '' : 'invalid password';
                break;
            default:
                break;
        }
        this.setState({formErrors:formErrorObject,
            emailValid: emailValid,
        passwordValid: passwordValid},this.onFormValid);
    }

    onFormValid=()=>{
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }


    render() {
        return (
            <form className='FormValidation'>
<h2>Sign up</h2>
                <div className='valid-mes'>
                    <FormErrors formErrors={this.state.formErrors}/>
                </div>

                <div className='field-input'>
                <label htmlFor="email">Email address</label>
                <input value={this.state.email}
                       className={(!this.state.emailValid && this.state.email.length>0)&& 'form-control'}
                onChange={this.onChangeSignUp}type="text" id='email' placeholder='email' name='email'/>

                </div>
                <div className='field-input'>
                <label htmlFor="password">Password</label>
                <input value={this.state.password}
                className={(!this.state.passwordValid&&this.state.password.length>0) && 'form-control'}
                onChange={this.onChangeSignUp}type="text" id='password' placeholder='password' name='password'/>
                </div>
                <input className='btn' type="submit" value='submit'
                disabled={!this.state.formValid}/>


            </form>
        );
    }
}

export default FormValidation;