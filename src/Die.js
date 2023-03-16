import React from "react"
import Dot from "./Dot"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            style={styles}
            onClick={props.holdDice}
        >
            <Dot value={props.value} />
        </div>
    )
}