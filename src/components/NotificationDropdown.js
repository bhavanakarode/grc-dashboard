import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaBell } from 'react-icons/fa';

const NotificationDropdown = () => {

  //  selectors, constants, states declarations

  const alerts = useSelector(state => state.alerts);
  const [open, setOpen] = useState(false);

  return (
    <div className="notification-dropdown" style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Notifications"
        style={{
          background: '#1f2937',
          padding: '0.5rem',
          borderRadius: '999px',
          border: `2px solid rgb(245, 198, 69)`,
          color: '#facc15',
          fontSize: '1rem',
          width: '2.5rem',
          height: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <FaBell />
      </button>
      {open && (
        <ul
          className="dropdown-menu"
          style={{
            background: '#21262d',
            position: 'absolute',
            right: 0,
            top: '3rem',
            listStyle: 'none',
            padding: '0.75rem',
            margin: 0,
            borderRadius: '0.5rem',
            border: '1px solid #30363d',
            color: '#c9d1d9'
          }}
        >
          {alerts.map(alert => (
            <li key={alert.id} style={{ padding: '0.25rem 0' }}>
              {alert.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationDropdown;