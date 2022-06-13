import React from 'react';

import Newsletters from '../components/partials/commons/Newletters';
import FooterDefault from '../components/shared/footers/FooterDefault';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';

import VendorMileStone from '~/components/partials/vendor/VendorMileStone';


const milestone = () => {
    
    
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <VendorMileStone/>
           
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};

export default milestone;
