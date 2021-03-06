import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login } from '../../../store/auth/action';
import fetch from 'isomorphic-unfetch'
import { setCookie } from "nookies"
import { Form, Input } from 'antd';
import { connect } from 'react-redux';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',
            username:''
        };
    }

   async handleRegisterSubmit(){
       
        const {API_URL} = process.env;
        const registerInfo = {
            username:this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        
      
        const registerOp = await fetch(`${API_URL}/api/auth/local/register`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                
           },
            body: JSON.stringify(registerInfo)
        })
   
        const registerResponse = await registerOp.json()
        console.log(registerResponse)
        if(!registerResponse.error) {
            setCookie(null, 'jwt', registerResponse.jwt, {
                maxAge: 30* 24 * 60 * 60,
                path:'/',
            })
            this.props.dispatch(login());
            Router.push('/')
        }
        else {
            console.log(registerResponse)
        }
       
    };

    render() {
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onFinish={this.handleRegisterSubmit.bind(this)}>
                        <ul className="ps-tab-list">
                            <li>
                                <Link href="/account/login">
                                    <a>Se Connecter</a>
                                </Link>
                            </li>
                            <li className="active">
                                <Link href="/account/register">
                                    <a>S'inscrire</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="register">
                            <div className="ps-form__content">
                                <h5>Cr??er Un Compte</h5>
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
                                            type="email"
                                            placeholder="addresse email"
                                            onChange={(e) => {this.state.email=e.target.value}} value={this.state.email}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Veuillez saisir votre nom d"utlisateur!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="nom d'utilisateur"
                                            onChange={(e) => {this.state.username=e.target.value}} value={this.state.username}
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
                                                    'Veuillez saisir votre mot de passe',
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
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        S'inscrire
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                <p>Se Connecter Avec:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google" href="#">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#">
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
export default connect(mapStateToProps)(Register);
