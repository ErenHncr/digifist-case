/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Proptypes from 'prop-types';

function ProductItem({ image, name, price }) {
  const [color, setColor] = useState('blue');

  const onChangeColor = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="product">
      <img src={image} alt="365 Signature Hoodie" />
      <span className="product-name">{name}</span>
      <div className="product-details">
        <span className="product-details-price">
          €
          {price}
        </span>
        <span className="product-details-colors">
          {['blue', 'brown', 'pink', 'green']
            .map((colorName) => (
              <button
                type="button"
                label={`${name}-${colorName}`}
                key={`${name}-${colorName}`}
                className={`color ${colorName} ${colorName === color ? 'active' : ''}`}
                onClick={() => onChangeColor(colorName)}
              />
            ))}
        </span>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired,
};

export default ProductItem;
