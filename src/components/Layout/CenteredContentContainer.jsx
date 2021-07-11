import React from 'react';

import styles from './CenteredContentContainer.module.scss';

const CenteredContentContainer = ({ children }) => {
  return (
    <div className={styles.centeredContent}>
      {children}
    </div>
  )
};

export default CenteredContentContainer;
