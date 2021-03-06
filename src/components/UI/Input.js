import React from "react";
import styles from "./input.module.css";

const Input = React.forwardRef((props, ref) => {
    return <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} defaultValue="1" ref={ref} />
    </div>
});
export default Input;