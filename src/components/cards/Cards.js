import React from "react";
import styles from "./cards.module.scss";
import Card from "../card/Card";

const Cards = props => (
    <div className={styles.cards}>
        {props.cards.map((card, index) => (
            <Card 
                key={index}
                title={card.title}
                desc={card.desc}
                img={card.img}
                color={card.color}
            />
        ))}
    </div>    
);

export default Cards;