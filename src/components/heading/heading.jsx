import React from 'react';
import styles from './heading.module.scss';
import { ReactComponent as GreenUnderline } from '../../assets/svg/green-underline.svg';

const Heading = (props) => {
  return (
    <h2 className={styles.heading}>
      <span>{props.text}</span>
      <span>
        <GreenUnderline />
      </span>
    </h2>
  );
};

export default Heading;
