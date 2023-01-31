import React, { useState } from 'react'
import styles from './Button.module.css'
export default function Button(props) {
    const [isOn, setIsOn] = useState(false);
    return (
        <div className={isOn?styles.isOn:styles.isOff} onClick={() => {

            setIsOn(!isOn);
            if(!isOn){
                alert("Button wurde eingeschalten")
            }
            else {
                alert("Button wurde ausgeschalten")
            }
            
        }}>{props.text}</div>
    )
}
