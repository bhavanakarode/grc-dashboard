import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/slices/sidebarSlice';
import { FaBars, FaChartBar } from 'react-icons/fa';

const Sidebar = () => {

  //  selectors, constants, states declarations

  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.sidebar.isOpen);

  return (
    <aside
      className="sidebar"
      style={{
        width: isOpen ? '200px' : '60px',
        background: '#161b22',
        color: '#fff',
        height: '100vh',
        padding: '1rem 0.5rem',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isOpen ? 'flex-start' : 'center',
        gap: '2rem',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isOpen ? 'space-between' : 'center',
          width: '100%',
          gap: '0.5rem'
        }}
      >
        <button
          onClick={() => dispatch(toggleSidebar())}
          aria-label="Toggle Sidebar"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ccc',
            fontSize: '1.25rem',
            marginTop: '0.5rem'
          }}
        >
          <FaBars />
        </button>
        {isOpen && <span style={{ fontWeight: 'bold', fontSize: '1.1rem', margin:'0.5rem auto' }}>GRC Dashboard</span>}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          cursor: 'pointer',
          fontSize: '1rem',
          marginLeft:'0.4rem'
        }}
      >
        <FaChartBar color="#facc15" size={20} />
        {isOpen && <span>Dashboard</span>}
      </div>
    </aside>
  );
};

export default Sidebar;
