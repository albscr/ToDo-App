import React from "react";
import './TodoIcon.css';
import {BsCheck2Circle} from "react-icons/bs"
import {TiDelete} from "react-icons/ti"

const iconTypes= {
    "check": color => (
        <BsCheck2Circle className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete":color => (
    <TiDelete className="Icon-svg Icon-svg--delete" fill={color} />
    ),
};

function TodoIcon({type, color = 'gray', onClick}){
    return(
        <span 
        className={`Icon-container Icon-container--${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export {TodoIcon};
