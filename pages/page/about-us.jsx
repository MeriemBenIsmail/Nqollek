import React from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newsletter from '../../components/partials/commons/Newletters';
import BreadCrumb from '../../components/elements/BreadCrumb';
import OurTeam from '../../components/partials/page/about-us/OurTeam';
import AboutAwards from '../../components/partials/page/about-us/AboutAwards';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import VendorTestimonials from '~/components/partials/vendor/VendorTestimonials';

const AboutUsPage = () => {
    const breadCrumb = [
        {
            text: 'Accueil',
            url: '/',
        },
        {
            text: 'A Propos',
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single">
                <img src="/static/img/bg/about-us.jpg" alt="" />
                <BreadCrumb breacrumb={breadCrumb} />
                <OurTeam />
                <AboutAwards />
            </div>
            <VendorTestimonials/>
            <Newsletter layout="container" />
            <FooterDefault />
        </div>
    );
};
export default AboutUsPage;
