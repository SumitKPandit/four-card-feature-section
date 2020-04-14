import React from "react";
import styles from "./cards.module.scss";
import Card from "../card/Card";

const Cards = ({ cards }) => (
    <div className={styles.cards}>
        {cards.map((card, index) => (
            <div className={styles.card} key={index}>
                <Card 
                    title={card.title}
                    desc={card.desc}
                    img={card.img}
                    color={card.color}
                />
            </div>
        ))}
    </div>    
);

export default Cards;