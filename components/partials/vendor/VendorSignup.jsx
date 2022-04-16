import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import { Form, Input } from 'antd';
import { connect } from 'react-redux';

class VendorSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // this.props.dispatch(login());
                // Router.push('/account/login');
            } else {
            }
        });
    };

    render() {
        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onSubmit={this.handleSubmit}>
                        {/* <ul className="ps-tab-list">
                            <li>
                                <Link href="/account/login">
                                    <a>Se Connecter</a>
                                </Link>
                            </li>
                            <li className="active">
                                <Link
                                    href="/account/VendorSignup
                            ">
                                    <a>S'inscrire</a>
                                </Link>
                            </li>
                        </ul> */}
                        <div
                            className="ps-tab active"
                            id="VendorSignup
                    ">
                            <div className="ps-form__content">
                                <div className="ps-tab-list">
                                    <h4>Créer Une Boutique</h4>
                                </div>

                                <div className="form-group">
                                    <label>Nom :</label>
                                    <Form.Item
                                        name="Nom"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Veuillez saisir le nom de votre boutique!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Nom de la boutique..."
                                        />
                                    </Form.Item>
                                </div>
                                <label>Numéro de téléphone :</label>
                                <div className="form-group">
                                    <Form.Item
                                        name="telephone"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Veuillez saisir votre numéro de téléphone',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="tel"
                                            required
                                            pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}"
                                            placeholder="XX XXX XXX"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <label>Adresse :</label>
                                    <Form.Item
                                        name="adresse"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Veuillez saisir votre adresse',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Adresse..."
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <label>Sous-domaine :</label>
                                    <Form.Item
                                        name="domaine"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Veuillez saisir votre sous-domaine',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="/xyz..."
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <label>Logo :</label>
                                    <Form.Item
                                        name="logo"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Veuillez importer une image (<100ko)',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="file"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Création
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer"></div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.auth;
};
export default connect(mapStateToProps)(VendorSignup);
