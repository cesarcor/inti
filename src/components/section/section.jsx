import React from "react";
import styles from "./section.module.scss";

const Section = props => {
  return (
      
    <section className={props.section_type === 'site_section_1200' ? styles.site_section_1200 : styles.site_section_1024 }>
        {props.children}
    </section>
    
    
    );
}

export default Section;