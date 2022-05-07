import React, { Component } from 'react';

class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="ps-my-account-2">
                <div className="container">
                    <div className="ps-section__wrapper">
                        <div className="ps-section__left">
                            <form
                                className="ps-form--account ps-tab-root"
                                action="link.html"
                                method="get">
                                <ul className="ps-tab-list">
                                    <li className="active">
                                        <a href="#sign-in">Se Connecter</a>
                                    </li>
                                    <li>
                                        <a href="#register">S'inscrire</a>
                                    </li>
                                </ul>
                                <div className="ps-tabs">
                                    <div className="ps-tab active" id="sign-in">
                                        <div className="ps-form__content">
                                            <h5>Connectez-Vous à votre compte</h5>
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Nom d'utilisateur ou email"
                                                />
                                            </div>
                                            <div className="form-group form-forgot">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Mot De Passe"
                                                />
                                                <a href="">Mot de passe oublié?</a>
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
                                                        Se Souvenir de moi ?
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group submit">
                                                <button className="ps-btn ps-btn--fullwidth">
                                                    Se Connecter
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-tab" id="register">
                                        <div className="ps-form__content">
                                            <h5>Créer Un Compte</h5>
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Nom d'utilisateur ou email"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Mot de passe"
                                                />
                                            </div>
                                            <div className="ps-form__decs">
                                                <div className="ps-radio">
                                                    <input
                                                        className="form-control"
                                                        type="radio"
                                                        id="user-type-1"
                                                        name="user-type"
                                                    />
                                                    <label htmlFor="user-type-1">
                                                        Je suis un client
                                                    </label>
                                                </div>
                                                <div className="ps-radio">
                                                    <input
                                                        className="form-control"
                                                        type="radio"
                                                        id="user-type-2"
                                                        name="user-type"
                                                    />
                                                    <label htmlFor="user-type-2">
                                                        Je suis propriétaire d'une boutique
                                                    </label>
                                                </div>
                                                <p>
                                                    Your personal data will be used to support your
                                                    experience throughout this website, to manage
                                                    access to your account, and for other purposes
                                                    described in our<a href="#">privacy policy.</a>
                                                </p>
                                            </div>
                                            <div className="form-group submit">
                                                <button className="ps-btn ps-btn--fullwidth">
                                                    Créer
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="ps-section__right">
                            <figure className="ps-section__desc">
                                <figcaption>Sign up today and you will be able to:</figcaption>
                                <p>
                                    REDSYS Buyer Protection has you covered from click to
                                    delivery. Sign up or sign in and you will be able to:
                                </p>
                                <ul className="ps-list">
                                    <li>
                                        <i className="icon-credit-card"></i>
                                        <span>SPEED YOUR WAY THROUGH CHECKOUT</span>
                                    </li>
                                    <li>
                                        <i className="icon-clipboard-check"></i>
                                        <span>TRACK YOUR ORDERS EASILY</span>
                                    </li>
                                    <li>
                                        <i className="icon-bag2"></i>
                                        <span>KEEP A RECORD OF ALL YOUR PURCHASES</span>
                                    </li>
                                </ul>
                            </figure>
                            <div className="ps-section__coupon">
                                <span>$25</span>
                                <aside>
                                    <h5>A small gift for your first purchase</h5>
                                    <p>
                                        REDSYS give $25 as a small gift for your first purchase.
                                        Welcome to REDSYS!
                                    </p>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyAccount;
