import React from 'react';

function Navbar(props) {
    return (
        <div>
            <h1>Habit Tracker {props.count}</h1>
        </div>
    );
}

export default Navbar;