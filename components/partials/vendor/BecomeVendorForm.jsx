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
            description:'',
            addresse:'',
            whatsapp:'',
            ville:''
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
            addresse: this.state.addresse
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
                <div className="ps-section__header">
                    <h3 style={{display: "center"}}>Créer une Boutique</h3>
               
            </div>
               
                    <Form
                        className="ps-form--order-tracking"
                        onFinish={this.handleSubmit.bind(this)}>
                        <div className="ps-tab active" id="sign-in" >
                            <div className="ps-form__content">
                                <h5>Créer votre propre boutique et devenez un vendeur au sein de NqollekHaja
</h5>
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
                                        name="description"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Veuillez saisir le nom et description de votre projet!',
                                            },
                                        ]}>
                                        <textarea
                                            style={{height: "12em"}}
                                            className="form-control"
                                            type="text"
                                            
                                            placeholder="Description" onChange={(e) => {this.state.description=e.target.value}} value={this.state.description}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="addresse"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Veuillez saisir votre addresse !',
                                            },
                                        ]}>
                                        <Input

                                            className="form-control"
                                            type="addresse"
                                            placeholder="Addresse..." 
                                            onChange={(e) => {this.state.addresse=e.target.value}} value={this.state.addresse}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="whatsapp"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Veuillez saisir votre whatsapp !',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="whatsapp"
                                            placeholder="whatsapp..." 
                                            onChange={(e) => {this.state.whatsapp=e.target.value}} value={this.state.whatsapp}
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="ville"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Veuillez saisir votre ville !',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="ville"
                                            placeholder="ville..." 
                                            onChange={(e) => {this.state.ville=e.target.value}} value={this.state.ville}
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
