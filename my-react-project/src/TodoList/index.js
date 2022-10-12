import React from "react";
import './TodoList.css';

function TodoList(props){
    return(
        <section>
            <ul className="container-items">
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList};