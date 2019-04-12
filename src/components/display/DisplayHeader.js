import React from 'react';
import reactImage from '../../../public/images/react_image.png';

import styles from '../../../public/styles/cash-mashine-display.scss'

const DisplayHeader = () => (
    <div className={styles.header}>
        React-Redux Bank
        <img src={reactImage} alt=""/>
    </div>
);

export default DisplayHeader;