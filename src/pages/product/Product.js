import React from 'react';
import {useParams} from "react-router-dom";
import styles from "./product.module.css";
import {iphone} from "../../constants";

const Product = () => {
    const title = {
        textAlign: "center"
    }

    const params = useParams();

    const product = () => {
        const prodId = +params.id;
        const phone = iphone.find(elem => elem.id === prodId);
        if (phone === undefined)
            return <h2 style={title}>Товар не найден</h2>;
        else {
            return (
                <div>
                    <h1 className={styles.name}>{phone.name}</h1>
                    <div className={styles.block}><img src={phone.img} alt={phone.name} className={styles.img}/></div>
                    <p className={styles.price}>{phone.price}</p>
                    <div className={styles.description}>{phone.description}</div>
                </div>
            );
        }
    };

    return (
        <div>
            {product()}
        </div>
    );
};

export default Product;
