import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

import useCard from "../../hooks/useCard";
import Coin from "../../assets/img/coin.png";
import "./ItemProduct.scss";

function ItemProduct({ product }) {
  const { addCard } = useCard();
  return (
    <div className="item-product">
      <div
        className="product-off"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className="product-name">{product.name} </div>
      </div>
      <div
        className="product-price display-flex"
        onClick={() => addCard(product)}
      >
        <div className="product-total">{get(product, "total", 0)}</div>
        <div>
          <img src={Coin} alt="coin" className="icon-price" />
          {get(product, "price", 0)}
        </div>
      </div>
    </div>
  );
}

ItemProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ItemProduct;
