import React from 'react';
import styles from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={styles.menu}>
      <h1>{props.pageName}</h1>
    </div>
  );
};

export default Menu;