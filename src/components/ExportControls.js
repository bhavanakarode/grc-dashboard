import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CSVLink } from 'react-csv';
import { useSelector } from 'react-redux';

const ExportControls = () => {

  //  selectors, constants, states declarations

  const { ISO27001, SOC2, GDPR, coverage } = useSelector(state => state.compliance);
  const { score, categories, trend } = useSelector(state => state.risk);
  const alerts = useSelector(state => state.alerts);
  
  // function for export pdf 

  const exportPDF = () => {
    const doc = new jsPDF();

    doc.text('Risk Overview', 14, 10);
    autoTable(doc, {
      startY: 14,
      head: [['Score', 'Categories']],
      body: [[score, categories.join(', ')]],
    });

    doc.text('Compliance Status', 14, doc.lastAutoTable.finalY + 10);
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 14,
      head: [['Standard', 'Compliance %']],
      body: [
        ['ISO 27001', `${ISO27001}%`],
        ['SOC 2', `${SOC2}%`],
        ['GDPR', `${GDPR}%`],
      ],
    });

    doc.text('Security Alerts', 14, doc.lastAutoTable.finalY + 10);
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 14,
      head: [['Message', 'Severity']],
      body: alerts.map(alert => [alert.message, alert.severity]),
    });

    doc.text('Risk Trend', 14, doc.lastAutoTable.finalY + 10);
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 14,
      head: [['Month', 'Score']],
      body: trend.labels.map((label, index) => [label, trend.data[index]]),
    });

    doc.text('Compliance Coverage', 14, doc.lastAutoTable.finalY + 10);
    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 14,
      head: [['Department', 'Coverage %']],
      body: coverage.labels.map((label, index) => [label, coverage.data[index]]),
    });

    doc.save('GRC_Report.pdf');
  };

  // function for export csv 

  const csvData = [
    ['Section', 'Field', 'Value'],
    ['Risk Overview', 'Score', score],
    ['Risk Overview', 'Categories', categories.join(', ')],
    ['Compliance Status', 'ISO 27001', `${ISO27001}%`],
    ['Compliance Status', 'SOC 2', `${SOC2}%`],
    ['Compliance Status', 'GDPR', `${GDPR}%`],
    ...alerts.map(alert => ['Security Alerts', alert.message, alert.severity]),
    ...trend.labels.map((label, i) => ['Risk Trend', label, trend.data[i]]),
    ...coverage.labels.map((label, i) => ['Compliance Coverage', label, coverage.data[i]]),
  ];

  return (
    <div className="export-controls" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      <button onClick={exportPDF} style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #3b82f6', background: 'transparent', color: '#3b82f6', fontWeight: '600', cursor: 'pointer' }}>
        Export PDF
      </button>
      <CSVLink
        filename="GRC_Report.csv"
        data={csvData}
        style={{ padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #3b82f6', background: 'transparent', color: '#3b82f6', fontWeight: '600', textDecoration: 'none' }}
      >
        Export CSV
      </CSVLink>
    </div>
  );
};

export default ExportControls;
