import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../store/cart/action';
import { removeWishlistItem } from '../../../store/wishlist/action';
import Link from 'next/link';
import { Rate } from 'antd';
import ProductCart from '../../elements/products/ProductCart';
class Wishlist extends Component {
    constructor(props) {
        super(props);
    }

    handleAddItemToCart = (e, product) => {
        this.props.dispatch(addItem(product));
    };

    handleRemoveWishListItem = (e, product) => {
        e.preventDefault();
        this.props.dispatch(removeWishlistItem(product));
    };

    render() {
        const { wishlistItems } = this.props;
        return (
            <div className="ps-section--shopping ps-whishlist">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Favoris</h1>
                    </div>
                    <div className="ps-section__content">
                        {wishlistItems && wishlistItems.length === 0 ? (
                            <div className="alert alert-danger" role="alert">
                                La liste des favoris est vide!
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="table ps-table--whishlist">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Nom du produit</th>
                                            <th>Unité de prix</th>
                                            <th>Boutique</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wishlistItems.map(product => (
                                            <tr key={product.id}>
                                                <td>
                                                    <a
                                                        href="#"
                                                        onClick={e =>
                                                            this.handleRemoveWishListItem(
                                                                e,
                                                                product
                                                            )
                                                        }>
                                                        <i className="icon-cross"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <ProductCart
                                                        product={product}
                                                    />
                                                </td>
                                                <td className="price">
                                                    ${product.price}
                                                </td>
                                                <td>{product.vendor}</td>
                                                <td>
                                                    <a
                                                        className="ps-btn"
                                                        href=""
                                                        onClick={e =>
                                                            this.handleAddItemToCart(
                                                                e,
                                                                product
                                                            )
                                                        }>
                                                        Ajouter au panier
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.wishlist;
};
export default connect(mapStateToProps)(Wishlist);
