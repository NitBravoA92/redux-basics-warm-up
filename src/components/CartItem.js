import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import { ChevronDown, ChevronUp } from '../icons';

const CartItem = ({
  id, img, title, price, amount,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="col-12">
      <article className="cart-item w-100 mb-5 border-top pt-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={img} alt={title} className="img-fluid w-25" />
          <div>
            <h3 className="text-primary fw-bold text-capitalize">{title}</h3>
            <h4 className="text-info fw-bolder">
              $
              {price}
            </h4>
            <button
              type="button"
              className="btn btn-danger mt-4"
              onClick={() => {
                dispatch(removeItem(id));
              }}
            >
              R E M O V E
            </button>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              dispatch(increase({ id }));
            }}
          >
            <ChevronUp />
          </button>
          <p className="text-center fw-bolder fs-4 mb-0 py-2">{amount}</p>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease({ id }));
            }}
          >
            <ChevronDown />
          </button>
        </div>
      </article>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CartItem;
