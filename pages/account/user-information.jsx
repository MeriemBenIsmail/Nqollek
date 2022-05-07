import React from 'react';
import jwtDecode from 'jwt-decode';
import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import UserInformation from '../../components/partials/account/UserInformation';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import { parseCookies } from 'nookies';


const UserInformationPage = ({user}) => {
    const breadCrumb = [
        {
            text: 'Accueil',
            url: '/',
        },
        {
            text: 'Informations Utilisateur',
        },
    ];
console.log(user)
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <UserInformation user={user} />
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};

export default UserInformationPage;

export async function getServerSideProps(ctx) {
    const { API_URL } = process.env;
    const jwt = parseCookies(ctx).jwt

        let decoded = jwtDecode(jwt); //data is what you sent in.
        const userId = decoded.id;
      
        const res = await fetch(`${API_URL}/api/users/${userId}`, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
    const user = await res.json();
    console.log(user)
    return {
        props: {
            user: user
        }
    }
}
