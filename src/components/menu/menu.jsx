import React from "react";
import styles from "./menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <nav className={styles.site_menu}>
      <ul className={styles.site_menu__list}>
        <li>
          <a href="#">Flower Pot</a>
        </li>
        <li>
          <a href="#">Planter</a>
        </li>
        <li>
          <a href="#">Pillars</a>
        </li>
        <li>
          <a href="#">Silk Flowers</a>
        </li>
      </ul>
      <button className={styles.burger_menu}>
        <span>Menu</span>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
};

export default Menu;
