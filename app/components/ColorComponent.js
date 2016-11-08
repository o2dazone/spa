import React from 'react';
import styles from 'styles/colors.scss';

const ColorComponent = ({ colors }) => {
  return (
    <div className={styles.foo}>
      {colors.id}
    </div>
  );
};

export default ColorComponent;
