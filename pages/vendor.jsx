import React from 'react';

import Newsletters from '../components/partials/commons/Newletters';
import FooterDefault from '../components/shared/footers/FooterDefault';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import BecomeVendorForm from '../components/partials/vendor/BecomeVendorForm';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import StoreList from '~/components/partials/vendor/StoreList';
import VendorBanner from '~/components/partials/vendor/VendorBanner';
import VendorBestFrees from '~/components/partials/vendor/VendorBestFees';
import VendorDashboard from '~/components/partials/vendor/VendorDashboard';
import VendorFaqs from '~/components/partials/vendor/VendorFaqs';
import VendorMileStone from '~/components/partials/vendor/VendorMileStone';
import VendorStore from '~/components/partials/vendor/VendorStore';
import VendorTestimonials from '~/components/partials/vendor/VendorTestimonials';

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
