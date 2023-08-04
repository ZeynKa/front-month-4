import React, { useState } from 'react';

const Squers = () => {
    const [square1Color, setSquare1Color] = useState('red');
    const [square2Color, setSquare2Color] = useState('blue');

    const handleSquareClick = (squareNumber) => {
        if (squareNumber === 1) {
            setSquare1Color(square2Color);
            setSquare2Color(square1Color);
        } else {
            setSquare2Color(square1Color);
            setSquare1Color(square2Color);
        }
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    margin: '10px',
                    backgroundColor: square1Color,

                }}
                onClick={() => handleSquareClick(1)}
            ></div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    margin: '10px',
                    backgroundColor: square2Color,
                }}
                onClick={() => handleSquareClick(2)}
            ></div>
        </div>
    );
};

export default Squers;
