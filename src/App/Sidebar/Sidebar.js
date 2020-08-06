import React from 'react';
import { connect } from 'react-redux';

/** components */
import Tags from './Tags/Tags';

/** styles */
import styles from './Sidebar.module.css';

export const Sidebar = ({
    heroImage,
    title,
    subtitle,
}) => {
    return (
        <div className={styles.sidebar}>
            <img
                src={heroImage}
                className={styles.hero}
            />
            <h3>{title}</h3>
            <div className={styles.subtitle}>{subtitle}</div>
            <Tags />
        </div>
    )
}

const mapStateToProps = state => ({
    heroImage: state.app.image,
    title: state.app.title,
    subtitle: state.app.subtitle,
})

export default connect(mapStateToProps)(Sidebar);