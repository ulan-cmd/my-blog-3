import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Catalog.module.css";
import {Outlet} from "react-router-dom";
import {iphone} from "../../constants";

const Catalog = () => {
    const title = {
        textAlign: "center"
    }

    const newIphone = iphone.map(item => {
        return (
            <li key={item.id}>
                <Link to={`/product/${item.id}`}>{item.name}</Link>
            </li>
        )
    })

    return (
        <div>
            <h1 className={title}>Каталог</h1>
            <ul>
                {newIphone}
            </ul>
            <Outlet/>
        </div>
    );
};

export default Catalog;