import { CartIcon } from '../icons';

const { useSelector } = require('react-redux');

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav className="navbar navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <a className="navbar-brand fs-2" href="/">
          Redux
          {' '}
          <span className="text-primary fw-bolder">Toolkit</span>
        </a>
        <div className="d-flex justify-content-center align-items-center me-4">
          <CartIcon />
          <div>
            <p className="navbar-text d-flex mb-0">
              Items:
              {' '}
              {amount}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
