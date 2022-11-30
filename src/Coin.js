import React from 'react';
import './Coin.css';

/** Coin: simple and stateless: just shows the name and image of the current coin. */

function Coin(props) {
    return (
        <div className="Coin">
            <img src={props.imgSrc} alt={props.side} />
        </div>
    );
}

export default Coin;