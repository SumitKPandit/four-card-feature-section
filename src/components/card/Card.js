import React from "react";
import styles from "./card.module.scss";

const Card = props => (
    <div className={styles.card}>
        <div className={styles.color} style={{backgroundColor: props.color}}></div>
        <div className={styles.content}>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <img src={props.img} alt={props.title} />
        </div>
    </div>
);

export default Card;