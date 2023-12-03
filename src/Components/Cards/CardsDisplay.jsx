// CardsDisplay.jsx
import React from 'react';
import Card from './Card';

const CardsDisplay = ({ accommodations }) => {
    return (
        <div className="cardsGrid">
            {accommodations.map((accommodation) => (
                <Card key={accommodation.id} {...accommodation} />
            ))}
        </div>
    );
};

export default CardsDisplay;
