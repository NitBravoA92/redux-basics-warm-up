import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
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
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            {' '}
            <span>
              $
              {total.toFixed(2)}
            </span>
          </h4>
        </div>
        <button type="button" className="btn clear-btn" onClick={() => { dispatch(clearCart()); }}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
