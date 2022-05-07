import React, { Component } from 'react';
import Link from 'next/link';

class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <div className="ps-section__left">
                                <aside className="ps-widget--account-dashboard">
                                    <div className="ps-widget__header">
                                        <img src="/static/img/users/3.jpg" />
                                        <figure>
                                            <figcaption>Bienvenu</figcaption>
                                            <p>username@gmail.com</p>
                                        </figure>
                                    </div>
                                    <div className="ps-widget__content">
                                        <ul>
                                            <li className="active">
                                                <Link href="/account/my-account">
                                                    <a>Dashboard</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/account/orders">
                                                    <a>Commandes</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/account/">
                                                    <a>Addresses</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/account/my-account">
                                                    <a>Détails du compte</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/account/logout">
                                                    <a>Se Déconnecter</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="ps-page__content">
                                <div className="ps-page__dashboard">
                                    <p>
                                        Bienvenu <strong>user@gmail.com</strong>!
                                    </p>
                                    <p>
                                        Depuis votre dashboard, vous pouvez consulter {' '}
                                        <Link href="/account/orders">
                                            <a>Commandes récentes</a>
                                        </Link>
                                        , gérer vos{' '}
                                        <Link href="/account/user-information">
                                            <a>
                                                adresses de livraison
                                            </a>
                                        </Link>
                                        , et{' '}
                                        <Link href="/account/user-information">
                                            <a>
                                                modifier votre mot de passe et vos informations personnelles
                                            </a>
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MyAccount;
