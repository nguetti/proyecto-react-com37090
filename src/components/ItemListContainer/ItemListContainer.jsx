import React from 'react';
import './ItemListContainer.css' ;

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <p>{greeting}</p>
        </div>
    );
}

export default ItemListContainer;
