import React from 'react';
import styles from "./Order.module.css";

const Order = (props) => {
  return (
    <div className={styles.order}>
      <h1>{props.pageName}</h1>
    </div>
  );
};

export default Order;