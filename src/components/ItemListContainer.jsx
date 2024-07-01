import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let url = 'https://api.mercadolibre.com/sites/MLA/search?q=';
        if (categoryId) {
          url += `category:${categoryId}`;
        } else {
          url += 'computadoras'; 
        }
        const response = await fetch(url);
        const data = await response.json();
        setItems(data.results);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div className="container">
      <h1>Products {categoryId && `in category ${categoryId}`}</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
