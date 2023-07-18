import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart row">
        <div className="col-12">
          <header className="py-5">
            <h2 className="fs-1 text-primary fw-bold text-center">Your Bag</h2>
            <h4 className="empty-cart fs-2 text-secondary fw-normal text-center">is currently empty</h4>
          </header>
        </div>
      </section>
    );
  }

  return (
    <section className="cart row">
      <div className="col-12">
        <header className="py-5">
          <h2 className="fs-1 text-primary fw-bold text-center">Your Bag</h2>
        </header>
      </div>
      <div className="col-12">
        <div className="row">
          { cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              amount={item.amount}
            />
          ))}
        </div>
      </div>
      <div className="col-12">
        <hr className="mt-5" />
        <div className="cart-total">
          <h4 className="d-flex justify-content-between">
            <span>Total</span>
            {' '}
            <span>
              $
              {total.toFixed(2)}
            </span>
          </h4>
        </div>
        <div className="d-flex justify-content-center my-5">
          <button type="button" className="btn btn-outline-danger w-50" onClick={() => dispatch(openModal())}>
            Clear Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
