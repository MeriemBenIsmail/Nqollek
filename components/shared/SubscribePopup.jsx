import React, { Component } from 'react';

class SubscribePopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubscribeShow: true,
        };
    }

    handleCloseSubscribePopup(e) {
        e.preventDefault();
        this.setState({ isSubscribeShow: false });
    }

    render() {
        const { isSubscribeShow } = this.state;
        const { active } = this.props;

        if (isSubscribeShow) {
            return (
                <div
                    className={`ps-popup ${active ? 'active' : ''}`}
                    id="subscribe">
                    <div
                        className="ps-popup__content bg--cover"
                        style={{
                            backgroundImage:
                                "url('/static/img/bg/subscribe.jpg')",
                        }}>
                        <a
                            className="ps-popup__close"
                            href="#"
                            onClick={e => this.handleCloseSubscribePopup(e)}>
                            <i className="icon-cross"></i>
                        </a>
                        <form
                            className="ps-form--subscribe-popup"
                            action="/"
                            method="get">
                            <div className="ps-form__content">
                                <h4>
                                    Profitez de <strong>25%</strong> Promotion
                                </h4>
                                <p>
                                    Abonnez-vous à UTOPIKA  mailing list{' '}
                                    <br /> pour recevoir des notifications sur des nouveaux arrivage, des offres spécials
                                    <br /> et nos promotions.
                                </p>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Email Address"
                                        required
                                    />
                                    <button className="ps-btn">
                                        S'abonner
                                    </button>
                                </div>
                                <div className="ps-checkbox">
                                    <input
                                        className="form-control"
                                        type="checkbox"
                                        id="not-show"
                                        name="not-show"
                                    />
                                    <label htmlFor="not-show">
                                        Ne plus afficher
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );
        } else {
            return '';
        }
    }
}

export default SubscribePopup;
