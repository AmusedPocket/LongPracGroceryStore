import {useDispatch} from 'react-redux';
import { addToCart } from '../../store/cart';

function ProduceDetails({ produce }) {
  let cartItem = {};
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(addToCart(produce.id))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          value={produce.id}
          onClick={onClick}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
