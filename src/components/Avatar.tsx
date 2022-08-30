import React from "react"
import styles from './Avatar.module.css';

interface MediaImage {
    hasBorder?: boolean;
    src?: string;
}

export function Avatar(props: MediaImage) {

    const hasBorder = props.hasBorder !== false; //Constante para deixar o código mais limpo e assim não se faz necessário dizer que tem borda onde o componente for utilizado.

    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={props.src} alt="rodlferreira" />
    );
}