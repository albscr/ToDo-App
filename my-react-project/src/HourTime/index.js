import React from "react";
import './HourTime.css';
import imagen from '../Mobile_note_list-cuate.png';


function HourTime() {
    let today = new Date();
    // get the date and time
    let now = today.toLocaleString();
    return (
        <div>
        <div>
            <img 
            src={imagen}
            className="image"
            />
        </div>

        <div>
            <p className="hour">{now}</p>
        </div>
        </div>
    );
}

function Greetings() {
    let curDate = new Date();
    let salute = curDate.getHours();
    let greeting;
    if (salute >= 1 && salute < 12) {
        greeting = "Good Morning";
    } else if (salute >= 12 && salute < 12) {
        greeting = "Good Afternoon"
    } else {
        greeting = "Good Night";
    }
    return (
        <>
            <div>
                <h2 className="salute">{greeting}</h2>
            </div>
        </>
    );
}

export { Greetings, HourTime };