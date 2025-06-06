import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/slices/themeSlice';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {

  //  selectors, constants, states declarations

  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle Theme"
      style={{
        background: '#1f2937',
        border: theme === 'dark' ? '2px solid white' : '2px solid transparent',
        padding: '0.5rem',
        borderRadius: '999px',
        color: '#ccc',
        fontSize: '1rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '2.25rem',
        height: '2.25rem'
      }}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
