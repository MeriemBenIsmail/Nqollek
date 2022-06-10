import React from 'react';
import Link from 'next/link';
const Links = {
    AccesoiresEtPierresPrécieuses: [
        {
            text: 'product1',
            url: '/shop'
        },
        {
            text: 'product2',
            url: '/shop'
        },
        {
            text: 'product3',
            url: '/shop'
        }
    ],
    MugsPerosnnalisés: [
        {
            text: 'mug1',
            url: '/shop'
        },
        {
            text: 'mug2',
            url: '/shop'
        },
        {
            text: 'mug3',
            url: '/shop'
        }
    ],
    EcoFriendly: [
        {
            text: 'Cookware',
            url: '/shop'
        },
        {
            text: 'Decoration',
            url: '/shop'
        },
        {
            text: 'Furniture',
            url: '/shop'
        },
        {
            text: 'Garden Tools',
            url: '/shop'
        },
        {
            text: 'Garden Equipments',
            url: '/shop'
        },
        {
            text: 'Powers And Hand Tools',
            url: '/shop'
        },
        {
            text: 'Utensil & Gadget',
            url: '/shop'
        }
    ],
    MaquillageEtSoins: [
        {
            text: 'Hair Care',
            url: '/shop'
        },
        {
            text: 'Decoration',
            url: '/shop'
        },
        {
            text: 'Makeup',
            url: '/shop'
        },
        {
            text: 'Body Shower',
            url: '/shop'
        },
        {
            text: 'Skin Care',
            url: '/shop'
        },
        {
            text: 'Cologine',
            url: '/shop'
        },
        {
            text: 'Perfume',
            url: '/shop'
        }
    ],
    AccessoiresEtBijouterie: [
        {
            text: 'Necklace',
            url: '/shop'
        },
        {
            text: 'Pendant',
            url: '/shop'
        },
        {
            text: 'Diamond Ring',
            url: '/shop'
        },
        {
            text: 'Sliver Earing',
            url: '/shop'
        },
        {
            text: 'Leather Watcher',
            url: '/shop'
        },
        {
            text: 'Gucci',
            url: '/shop'
        }
    ],
    AccessoiresSmartphone: [
        {
            text: 'Desktop PC',
            url: '/shop'
        },
        {
            text: 'Laptop',
            url: '/shop'
        },
        {
            text: 'Smartphones',
            url: '/shop'
        },
        {
            text: 'Tablet',
            url: '/shop'
        },
        {
            text: 'Game Controller',
            url: '/shop'
        },
        {
            text: 'Audio & Video',
            url: '/shop'
        },
        {
            text: 'Wireless Speaker',
            url: '/shop'
        }
    ]
};

const FooterLinks = () => (
    <div className="ps-footer__links">
        <p>
            <strong>Accessoires Et Pierres Précieuses:</strong>
            {Links.AccesoiresEtPierresPrécieuses.map(item => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Mugs Personnalisés:</strong>
            {Links.MugsPerosnnalisés.map(item => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Eco Friendly</strong>
            {Links.EcoFriendly.map(item => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Maquillage ,Soins &amp; Beauté </strong>
            {Links.MaquillageEtSoins.map(item => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Accessoires &amp; Bijouterie</strong>
            {Links.AccessoiresEtBijouterie.map(item => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Accessoires &amp; Smartphone:</strong>
            {Links.AccessoiresSmartphone.map(item => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
    </div>
);

export default FooterLinks;
