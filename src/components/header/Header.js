import React from "react";
import styles from "./header.module.scss";

const Header = props => (
    <div className={styles.header}>
        <h1>{props.h1}</h1>
        <p className={styles.tagline}>{props.h2}</p>
        <p>{props.p}</p>
    </div>
);

export default Header;