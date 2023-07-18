import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import './App.css';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <h1 className="fs-1 text-secondary fw-bolder text-center">Loading products...</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="App">
        {isOpen && <Modal />}
        <Navbar />
        <div className="container-fluid py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-7 col-xl-6">
              <CartContainer />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="row">
          <div className="col-12">
            <p className="text-center">
              This project is made based on the tutorial
              {' '}
              <a href="https://www.youtube.com/watch?v=bbkBuqC1rU4">Redux Toolkit Tutorial – JavaScript State Management Library</a>
              {' '}
              The source code was developed by
              {' '}
              <a href="https://github.com/john-smilga">John Smilga</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
