import React from 'react';
import stacklineLogo from '../../stackline-logo.png'

/** styles */
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src={stacklineLogo}
                className={styles.logo}
            />
        </header>
    )
}

export default Header;