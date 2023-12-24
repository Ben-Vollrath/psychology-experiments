import React, { useState, useEffect } from 'react';
import './ScrollCircle.css';

const ScrollCircle = () => {
    const [circleSize, setCircleSize] = useState(100);

    useEffect(() => {
        const handleWheel = (event) => {
            // Adjust the size based on the wheel delta
            setCircleSize(prevSize => {
                let newSize = prevSize + event.deltaY * -0.01; // Adjust the multiplier as needed for sensitivity
                return newSize > 10 ? newSize : 10; // Prevent circle size from going below 10
            });
        };

        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div
            style={{
                width: `${circleSize}px`,
                height: `${circleSize}px`,
                borderRadius: '50%',
                backgroundColor: 'blue',
                margin: 'auto'
            }}
        />
    );
};

export default ScrollCircle;
