import React from 'react';

const OrderTracking = () => (
    <div className="ps-order-tracking">
        <div className="container">
            <div className="ps-section__header">
                <h3>Suivie de commande</h3>
                <p>
                    Pour suivre vos commandes, veuillez saisir l'identifiant de votre commande
                    dans le champs ci-dessous et appuyez sur le bouton "Suivre".Cet identifiant
                    vous a été fourni dans la facture et également dans l'email de confirmation envoyé.
                </p>
            </div>
            <div className="ps-section__content">
                <form className="ps-form--order-tracking" action="/" method="get">
                    <div className="form-group">
                        <label>ID Commande</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Indiqué dans l'email de confirmation"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email de facture</label>
                        <input className="form-control" type="text" placeholder="" />
                    </div>
                    <div className="form-group">
                        <button className="ps-btn ps-btn--fullwidth">Suivre votre commande</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default OrderTracking;
