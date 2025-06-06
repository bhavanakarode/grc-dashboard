import React from 'react';
import { useSelector } from 'react-redux';

// creating const for alert severity
const getColor = (severity) => {
  switch (severity.toLowerCase()) {
    case 'high': return '#ff4d4f';
    case 'medium': return '#faad14';
    case 'low': return '#52c41a';
    default: return '#ccc';
  }
};

const SecurityAlerts = () => {

  //  selectors, constants, states declarations

  const alerts = useSelector(state => state.alerts);
  const searchTerm = useSelector(state => state.search.term.toLowerCase());
  const componentLabel = 'security alerts';

  // search filter

  if (
    searchTerm &&
    searchTerm.trim() !== '' &&
    !componentLabel.includes(searchTerm)
  ) {
    return null;
  }

  return (
    <div className="card" aria-label="Security Alerts Panel">
      <h3>Security Alerts</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {alerts.map(alert => (
          <li
            key={alert.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  backgroundColor: getColor(alert.severity),
                  borderRadius: '50%',
                  display: 'inline-block',
                  width: '10px',
                  height: '10px',
                  marginRight: '10px'
                }}
              ></span>
              <strong>{alert.message}</strong>
            </div>
            <span>{alert.severity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecurityAlerts;
