import React, { useEffect, useState } from 'react';
import p5 from 'p5';

let quantityState: number

const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth / 2, p.windowHeight / 2).parent('square')
    }

    p.draw = () => {
        p.clear()
        for (let i = 0; i < quantityState; i++) {
            p.square(10 + (i * 100), 10, 100)
        }
    }
}

const Square: React.FC = () => {
    const [quantity, setQuantity] = useState(3)

    quantityState = quantity

    useEffect(() => {
        new p5(sketch)
    }, [])

    return (
        <div>
            <div id="square"/>
            <button onClick={() => setQuantity(quantity - 1)}>減らす</button>
            <button onClick={() => setQuantity(quantity + 1)}>増やす</button>
        </div>
    );
}

export default Square;
