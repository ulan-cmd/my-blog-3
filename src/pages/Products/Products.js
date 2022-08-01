import React from 'react';
import styles from "./Products.module.css";

const Products = (props) => {
  return (
    <div className={styles.products}>
      <h1>{props.pageName}</h1>
    </div>
  );
};

export default Products;