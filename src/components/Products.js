import React from 'react';
import PropTypes from 'prop-types';

 function Products(props) {
  const { imgUrl, name, price, quantity  } = props;
  return (
    <div>
    <img src={imgUrl}
      alt={name} />
    <h2>{name}</h2>
     <p>Price: {price}$</p> 
      
      <p>Quantity: {quantity < 50 ? 'Их мало' : 'Достаточно'} </p>

    <button type="button">Add to cart</button> 
  </div>) //рендер по условию
}

Products.defaultProps = {
    imgUrl:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
}

Products.propTypes = { // анализ кода на типы данных
    imgUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default Products;