import React from "react";
import { Table } from "react-bootstrap";
import ProductItems from "../ProductItems/ProductItems";
import PropTypes from 'prop-types';

const ProductList = ({ produits }) => {
    const handleClick =(productName) => {
        alert(`this product is ${productName}`)
    }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {produits.map((el,index) => (
            <ProductItems produit={el} key = {index} handleClick = {handleClick} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
ProductList.propTypes={
    produits: PropTypes.array,
    handleClick: PropTypes.func
}
export default ProductList;
