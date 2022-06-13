import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import LayoutShop from '../../components/partials/shop/LayoutShop';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import ShopBrands from '../../components/partials/shop/ShopBrands';
import ShopBanner from '../../components/partials/shop/ShopBanner';
import ShopCategories from '../../components/partials/shop/ShopCategories';
import ShopWidget from '../../components/partials/shop/modules/ShopWidget';
import {
    getProducts,
    getTotalProducts,
    getProductsByCategory,
} from '../../store/product/action';
import { getCollections } from '../../store/collection/action';
import VendorStore from '~/components/partials/vendor/VendorStore';
import VendorProducts from '~/components/partials/vendor/modules/VendorProducts';
import StoreList from '~/components/partials/vendor/StoreList';
import ShopCarouselBanner from '~/components/partials/shop/ShopCarouselBanner';
import StoreList2 from '~/components/partials/vendor/StoreList2';

class ShopDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        const { query } = this.props;
        if (query) {
            if (query.category) {
                this.props.dispatch(getProductsByCategory(query.category));
            } else {
                const params = {
                    _start: 1,
                    _limit: 12,
                };
                this.props.dispatch(getProducts(params));
                this.props.dispatch(getTotalProducts());
            }
            const collectionsParams = [
                'shop-best-seller-items',
                'shop-recommend-items',
            ];
            this.props.dispatch(getCollections(collectionsParams));
        }
    }

    render() {
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Shop Default',
            },
        ];
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <div className="ps-page--shop">
                    <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                    <div className="ps-container">

                        <StoreList/>
                    </div>
                </div>
                <Newletters layout="container" />
                <FooterDefault />
            </div>
        );
    }
}
export default connect(state => state)(ShopDefaultPage);
