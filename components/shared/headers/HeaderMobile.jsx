import React, { Component } from 'react';
import CurrencyDropdown from './modules/CurrencyDropdown';
import Link from 'next/link';
import LanguageSwicher from './modules/LanguageSwicher';
import MobileHeaderActions from './modules/MobileHeaderActions';

class HeaderMobile extends Component {
    constructor({ props }) {
        super(props);
    }

    render() {
        return (
            <header className="header header--mobile">
                <div className="header__top">
                    <div className="header__left">
                        <p>Welcome to UTOPIKA Online Shopping Store !</p>
                    </div>
                    <div className="header__right">
                        <ul className="navigation__extra">
                            <li>
                                <Link href="/vendor">
                                    <a>Sell on UTOPIKA</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/order-tracking">
                                    <a>Suivre votre commande</a>
                                </Link>
                            </li>
                            <li>
                                <CurrencyDropdown />
                            </li>
                            <li>
                                <LanguageSwicher />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navigation--mobile">
                    <div className="navigation__left">
                        <Link href="/">
                            <a className="ps-logo">
                                <h2 style={{color:"#c4cad0"}}>U T O P I K A</h2>
                            </a>
                        </Link>
                    </div>
                    <MobileHeaderActions />
                </div>
                <div className="ps-search--mobile">
                    <form
                        className="ps-form--search-mobile"
                        action="/"
                        method="get">
                        <div className="form-group--nest">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search something..."
                            />
                            <button>
                                <i className="icon-magnifier"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </header>
        );
    }
}

export default HeaderMobile;
