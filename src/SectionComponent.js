import React from "react";

const SectionComponent = (props) => {
    const classes = (props.className ? `${props.className} section` : `section`)
    return (
        <span
            className={classes + (props.state === "X" ? ` fc-aqua` : ` fc-white`)}
            onClick={() => props.onClick(props.index)}>
           {props.state}
        </span>
    )
}
export default SectionComponent