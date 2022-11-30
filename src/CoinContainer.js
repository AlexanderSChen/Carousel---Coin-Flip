import React, { useState } from 'react';
import Coin from './Coin';
import './CoinContainer.css';
import { choice } from './helpers';

/** Coin container holds state about flip: heads/tails and current coin */

function CoinContainer(props) {
    const [coin, setCoin] = useState(null);
    const [headCount, setHeadCount] = useState(0);
    const [tailCount, setTailCount] = useState(0);
    const handleClick = () => {
        const newCoin = choice(props.coins);
        setCoin(newCoin);
        if (newCoin.side === "head") {
            setHeadCount(oldCount => oldCount + 1);
        } else {
            setTailCount(oldCount => oldCount + 1);
        }
    };

    const currCoin = coin ? (
        <Coin side={coin.side} imgSrc = {coin.imgSrc} />
    ) : null;

    return (
        <div className="CoinContainer">
            <h2>Flip a coin</h2>
            {currCoin}
            <button onClick={handleClick}>Flip!</button>
            <p>
                {headCount + tailCount} {headCount + tailCount === 1 ?  "flip" : "flips"} 
            </p>
            <p>
                 {headCount} {headCount === 1 ? "head" : "heads"} & {tailCount} {tailCount === 1 ? "tail" : "tails"} 
            </p>
        </div>
    );
}

CoinContainer.defaultProps = {
    coins: [
      {
        side: "head",
        imgSrc: "https://tinyurl.com/react-coin-heads-jpg"
      },
      {
        side: "tail",
        imgSrc: "https://raw.githubusercontent.com/Jayant818/Coin-Flipper/main/src/Tail.jpg"
      }
    ]
};

export default CoinContainer;