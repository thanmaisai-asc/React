import React from 'react';

export default function Greet({name,age}) {
    console.log(name + " " + age);
    return (
        <div>
            <h1>Welcome to React, {name}, you are {age} old</h1>
            {/* <div>{props.children}</div> */}
        </div>
    );
}
