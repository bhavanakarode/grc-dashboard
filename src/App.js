// App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import RiskOverview from './components/RiskOverview';
import ComplianceStatus from './components/ComplianceStatus';
import SecurityAlerts from './components/SecurityAlerts';
import RiskTrendsChart from './components/RiskTrendsChart';
import ComplianceCoverageChart from './components/ComplianceCoverageChart';
import NotificationDropdown from './components/NotificationDropdown';
import ExportControls from './components/ExportControls';
import ThemeToggle from './components/ThemeToggle';
import Search from './components/Search';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector(state => state.theme.mode);
  const isSidebarOpen = useSelector(state => state.sidebar.isOpen);

  return (
    <div className={`app ${theme}`} aria-label="GRC Dashboard App">
      <Sidebar />
      <main
        className="main-content"
        style={{
          marginLeft: isSidebarOpen ? '200px' : '60px',
          transition: 'margin-left 0.3s ease',
          padding: '1.5rem'
        }}
        role="main"
      >
        <div
          className="header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            flexWrap: 'wrap'
          }}
        >
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Dashboard</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Search />
            <NotificationDropdown />
            <ThemeToggle />
            <ExportControls />
          </div>
        </div>

        <div className="dashboard-grid">
          <RiskOverview />
          <ComplianceStatus />
          <SecurityAlerts />
          <RiskTrendsChart />
          <ComplianceCoverageChart />
        </div>
      </main>
    </div>
  );
}

export default App;
