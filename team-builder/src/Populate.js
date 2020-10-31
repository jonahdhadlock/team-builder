import React from 'react';

function Populate(props) {
    return (
        <div>
            <p>{props.id}</p>
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.role}</p>
        </div>
    );
}

export default Populate;