import React from "react";
import styles from "./footer.module.scss";
import FooterMenu from "../footer-menu/footer-menu";

const Footer = () => {
  return (
    <footer className={styles.site_footer}>
      <div className={styles.footer_container}>
        <div className={styles.col_1}>
          <h1>Inti</h1>
        </div>
        <div className={styles.col_2}>
          <FooterMenu />
        </div>
        <div className={styles.col_3}>
          <span>
            Developed by <a href="#">Cesar Correchel</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
