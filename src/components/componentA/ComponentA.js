import React from "react";
import styles from "./ComponentA.module.css"

export const ComponentC = () => {
  return (
    <h1 className={styles.myText}>ComponentC</h1>
  )
}
export const ComponentA = () => {

  console.log(styles);

  return (<>
      <h1 className={styles.myText}>ComponentA</h1>
    </>
  );
}

// export default ComponentA;