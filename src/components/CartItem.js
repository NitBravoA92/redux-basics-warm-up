import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from '../icons';

const CartItem = ({
  id, img, title, price, amount,
}) => (
  <article className="cart-item">
    <img src={img} alt={title} />
    <div>
      <h4>{title}</h4>
      <h4 className="item-price">
        $
        {price}
      </h4>
      <button
        type="button"
        className="remove-btn"
      >
        remove
        {' '}
        {id}
      </button>
    </div>
    <div>
      <button
        type="button"
        className="amount-btn"
      >
        <ChevronUp />
      </button>
      <p className="amount">{amount}</p>
      <button
        type="button"
        className="amount-btn"
      >
        <ChevronDown />
      </button>
    </div>
  </article>
);

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
};
export default CartItem;
