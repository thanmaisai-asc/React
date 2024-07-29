import React from 'react';

export default function Greet(props) {
    console.log(props);
    return (
        <div>
            <h1>Welcome to React, {props.name}, you are {props.age} old</h1>
            <div>{props.children}</div>
        </div>
    );
}
