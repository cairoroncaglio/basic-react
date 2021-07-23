import React from 'react';
import './Content.css';

const Content = props => {
    return (
        <div className="Content">
            <p>Nome: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Data: {props.date.toString()}</p>
            <p>{props.children}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
    )
};


export default Content;