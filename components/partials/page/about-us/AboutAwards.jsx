import React, { Component } from 'react';
import AboutFeatures from './AboutFeatures';

class AboutAwards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       
        return (
            <div className="ps-about-awards">
                <div className="container">
                    <div className="ps-section__header">
                        <h4>A Propos</h4>
                        <p>
                        “Nqollek.tn” est une marketplace d’expériences et de cadeaux en ligne.
                         Nous croyons fermement en vous, jeunes talents. Nous avons foi dans le 
                         potentiel créatif des Tunisiens. C’est pour toutes ces raisons que les 
                         articles proposés sont des produits fabriqués par des artisans et artistes 
                         tunisiens et des petites entreprises tunisiennes.
                        </p>
                    </div>
                    <AboutFeatures />
                </div>
            </div>
        );
    }
}

export default AboutAwards;
