import React from 'react';
import { useSelector } from 'react-redux';

const ComplianceStatus = () => {

  //  selectors, constants, states declarations

  const { ISO27001, SOC2, GDPR } = useSelector(state => state.compliance);
  const searchTerm = useSelector(state => state.search.term.toLowerCase());
  const componentLabel = 'compliance status';

  // search filter

  if (
    searchTerm &&
    searchTerm.trim() !== '' &&
    !componentLabel.includes(searchTerm)
  ) {
    return null;
  }


  // function for provoiding data labels and options

  const renderProgress = (label, value) => (
    <div className="compliance-row" key={label} style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
        <span><strong>{label}</strong></span>
        <span>{value} %</span>
      </div>
      <div style={{
        backgroundColor: '#2c313a',
        borderRadius: '10px',
        height: '10px',
        width: '100%'
      }}>
        <div
          style={{
            backgroundColor: '#3b82f6',
            width: `${value}%`,
            height: '100%',
            borderRadius: '10px'
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="card" aria-label="Compliance Status Panel">
      <h3>Compliance Status</h3>
      {renderProgress('ISO 27001', ISO27001)}
      {renderProgress('SOC 2', SOC2)}
      {renderProgress('GDPR', GDPR)}
    </div>
  );
};

export default ComplianceStatus;
