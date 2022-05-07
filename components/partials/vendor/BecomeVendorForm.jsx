import React, { Component , useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import fetch from 'isomorphic-unfetch'
import { Form, Input, notification } from 'antd';
import { connect } from 'react-redux';

class BecomeVendor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        };
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

   

    async handleSubmit()  {
       
        const {API_URL} = process.env;
        const loginInfo = {
            identifier: this.state.email,
            password: this.state.password
        }
      
        const loginOp = await fetch(`${API_URL}/api/auth/local`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
           },
            body: JSON.stringify(loginInfo)
        })
   
        const loginResponse = await loginOp.json()
        
        if(!loginResponse.error) {
            setCookie(null, 'jwt', loginResponse.jwt, {
                maxAge: 30* 24 * 60 * 60,
                path:'/',
            })
           
            this.props.dispatch(login());
            Router.push('/')
        }
        else {
            console.log(loginResponse)
        }
        

    }
    

    render() {
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onFinish={this.handleSubmit.bind(this)}>
                        <ul className="ps-tab-list">
                            <li className="active">
                              
                                    Créer Une Boutique
                          
                            </li>
                          
                        </ul>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Devenez un vendeur nqollek</h5>
                                <div className="form-group">
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Veuillez saisir votre email!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            
                                            placeholder="email" onChange={(e) => {this.state.email=e.target.value}} value={this.state.email}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="firstname"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Veuillez saisir votre prénom!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            
                                            placeholder="nom" onChange={(e) => {this.state.email=e.target.value}} value={this.state.email}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Veuillez saisir votre mot de passe !',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="password"
                                            placeholder="mot de passe..." 
                                            onChange={(e) => {this.state.password=e.target.value}} value={this.state.password}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <div className="ps-checkbox">
                                        <input
                                            className="form-control"
                                            type="checkbox"
                                            id="remember-me"
                                            name="remember-me"
                                        />
                                        <label htmlFor="remember-me">
                                            Se Souvenir De Moi
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Se Connecter
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                <p>Se Connecter Avec:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a
                                            className="facebook"
                                            href="#"
                                            onClick={e =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="google"
                                            href="#"
                                            onClick={e =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                  
                                    <li>
                                        <a
                                            className="instagram"
                                            href="#"
                                            onClick={e =>
                                                this.handleFeatureWillUpdate(e)
                                            }>
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(BecomeVendor);
