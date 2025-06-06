import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/slices/searchSlice';
import { FaSearch } from 'react-icons/fa';

const Search = () => {

  //  selectors, constants, states declarations

  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.search.term);
  const theme = useSelector((state) => state.theme.mode);
  const [hover, setHover] = useState(false);

  const isDark = theme === 'dark';

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: isDark ? '#1f2937' : '#f9fafb',
        padding: '0.5rem',
        borderRadius: '999px',
        border: `2px solid #3b82f6`,
        transition: '0.3s ease'
      }}
    >
      <FaSearch style={{ cursor: 'pointer', fontSize: '1.2rem', color: isDark ? '#ccc' : '#333' }} />
      {hover && (
        <input
          type="text"
          placeholder="Search titles..."
          value={searchText}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          style={{
            padding: '0.35rem 0.6rem',
            borderRadius: '6px',
            backgroundColor: isDark ? '#0f172a' : '#fff',
            color: isDark ? '#f1f5f9' : '#111827',
            outline: 'none'
          }}
        />
      )}
    </div>
  );
};

export default Search;
