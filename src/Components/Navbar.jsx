import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from './utils/global.context';

const Navbar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();

  const handleTheme = () => {
    if (state.theme === 'dark') {
      dispatch({ type: 'LIGHT' });
    } else {
      dispatch({ type: 'DARK' });
    }
  };

  return (
    <header className={`navbar ${state.theme}`}>
      <div className="nav-links">
        <Link to="/" className="nav-link" onClick={() => navigate('/')}>
          Home
        </Link>
        <Link to="/favs" className="nav-link" onClick={() => navigate('/favs')}>
          Favoritos
        </Link>
        <Link to="/contact" className="nav-link" onClick={() => navigate('/contact')}>
          Contact
        </Link>
      </div>
      <div className="theme-switch">
        {state.theme === 'dark' ? (
          <button onClick={handleTheme}>
            <FaSun />
          </button>
        ) : (
          <button onClick={handleTheme}>
            <FaMoon />
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
