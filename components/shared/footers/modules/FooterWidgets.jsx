import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    <div className="ps-footer__widgets" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"20px"}}>
        
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Contactez-Nous</h4>
            <div className="widget_content">
                <Link href="/">
                                    <a className="ps-logo" >
                                        <img
                                            src="/static/img/logo.png"
                                            alt="REDSYS" style={{width:"80%"}}
                                        />
                                    </a>
                </Link>
                <p>Call us 24/7</p>
                <h3>1800 97 97 69</h3>
                <p>
                    502 New Design Str, Melbourne, Australia <br />
                    <a href="mailto:contact@REDSYS.co">contact@Nqollek.co</a>
                </p>
                <ul className="ps-list--social">
                    <li>
                        <a className="facebook" href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a className="twitter" href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a className="google-plus" href="#">
                            <i className="fa fa-whatsapp"></i>
                        </a>
                    </li>
                    <li>
                        <a className="instagram" href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
     
        <aside className="widget widget_footer">
            <h4 className="widget-title">NOTRE SOCIETE</h4>
            <ul className="ps-list--link" >
                <li>
                    <Link href="/page/about-us">
                        <a>A propos</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Créer une boutique</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/contact-us">
                        <a>Contactez-Nous</a>
                    </Link>
                </li>
               
            </ul>
        </aside>
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">A PROPOS</h4>
            <div className="widget_content">
                <p>
                “Nqollek.tn” est une marketplace 
                d’expériences et de cadeaux en ligne.
                Nous croyons fermement en vous, jeunes talents. Nous avons
                foi dans le potentiel créatif des Tunisiens. C’est pour toutes ces
                raisons que les articles proposés sont des 
                produits fabriqués par des artisans et artistes tunisiens 
                et des petites entreprises tunisiennes.   
                </p>
            </div>
        </aside>
       
    </div>
);

export default FooterWidgets;
