import React from 'react';

import Newsletters from '../components/partials/commons/Newletters';
import FooterDefault from '../components/shared/footers/FooterDefault';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import BecomeVendorForm from '../components/partials/vendor/BecomeVendorForm';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';

const vendor = () => {
    
    
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--my-account">
                <BecomeVendorForm />
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};

export default vendor;
