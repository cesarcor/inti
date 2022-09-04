import React from "react";
import styles from "./footer-menu.module.scss";

const FooterMenu = () => {
  return (
    <div>
      <ul className={styles.footer_menu_list}>
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
    </div>
  );
};

export default FooterMenu;
