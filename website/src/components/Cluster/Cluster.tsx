import React, { FC } from 'react';
import styles from './Cluster.module.css';

const Cluster: FC = ({ children }) => (
    <div className={styles.container}>{children}</div>
);

export default Cluster;
