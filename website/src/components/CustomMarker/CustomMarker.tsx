import React, { FC } from 'react';
import styles from './CustomMarker.module.css';

const CustomMarker: FC = ({ children }) => (
    <div className={styles.container}>
        <div className={styles.content}>{children}</div>
        <div className={styles.nose}></div>
    </div>
);

export default CustomMarker;
