import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    };

    fetchItem();
  }, [itemId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container item-detail">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default ItemDetailContainer;
