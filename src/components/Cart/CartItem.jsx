import { useState, useEffect } from 'react';

function CartItem({ item }) {
  console.log(item)
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.produce.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          
        />
        <button
          className="cart-item-button"
          onClick={()=>setCount(count => count + 1)}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={()=>setCount(count => count - 1)}
        >
          -
        </button>
        <button
          className="cart-item-button"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
