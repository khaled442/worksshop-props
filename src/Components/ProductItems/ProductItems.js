import React from "react";
import { Button } from "react-bootstrap";

const ProductItems = ({ produit,handleClick }) => {
  return (
    <tr>
      <td><Button className="primary" onClick = {() => handleClick(produit.name)}>click me</Button></td>
      <td>{produit.name}</td>
      <td><img src = {produit.imgSrc} alt =""/></td>
      <td>{produit.price}</td>
    </tr>
  );
};


export default ProductItems;
