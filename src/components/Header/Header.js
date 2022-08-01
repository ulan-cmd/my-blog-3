import React from "react";
import {Link, NavLink} from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
    const setActive = ({isActive}) => (isActive ? styles.active : "");

    return (
        <div className={styles.header}>
            <ul>
                <li>
                    <NavLink to="/" className={setActive}>
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={setActive}>
                        О нас
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className={setActive}>
                        Контакты
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/menu" className={setActive}>
                        Меню
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/order" className={setActive}>
                        Заказы
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={setActive}>
                        Продукты
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/catalog" className={setActive}>
                        Каталог
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/catalog/iphone" className={setActive}>
                        Айфон
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/catalog/macBook" className={setActive}>
                        МакБук
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;
