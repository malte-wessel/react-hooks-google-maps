import React, { FC } from 'react';
import styles from './CustomMarker.module.css';

const CustomMarker: FC = ({ children }) => (
    <div className={styles.container}>{children}</div>
);

export default CustomMarker;
