# grc-dashboard
Modern responsive GRC dashboard with React, Redux, Chart.js and bootstrap

#  GRC Dashboard

A modern, responsive Governance, Risk, and Compliance (GRC) Dashboard built with **React**, **Redux**, **Chart.js**, and **Bootstrap**. It visualizes real-time organizational data such as risk scores, compliance status, security alerts, and trends.

### Live Demo
grc-dashboard.netlify.app
---

##  Features

-  **Risk Overview Panel**
-  **Compliance Status with Progress Bars**
-  **Security Alerts with Severity Indicators**
-  **Interactive Risk Trends**
-  **Compliance Coverage by Department**
-  **Dark/Light Mode Toggle**
-  **Notification Dropdown**
-  **Export to PDF/CSV**
-  **Mini Search Input on Hover**
-  **Accessibility with ARIA Labels & Keyboard Support**
-  **Mobile-first responsive layout**

---

##  Design Decisions

- **Data Layout**: Card-based modular sections for each domain.
- **Dark/Light Mode**: Controlled via Redux, persistent across reloads.
- **Accessibility**: Supports screen readers and keyboard navigation.
- **Mobile Optimization**: Working  on small devices also.

---

##  Tech Stack

- **Frontend**: React, Redux Toolkit
- **UI**: Bootstrap, Custom CSS
- **Charts**: Chart.js, React-Chartjs-2
- **Icons**: React Icons (FontAwesome)
- **PDF/CSV Export**: jsPDF, jsPDF-autotable, react-csv

---

##  Folder Structure

src/
├── components/
│ ├── RiskOverview.js
│ ├── ComplianceStatus.js
│ ├── SecurityAlerts.js
│ ├── RiskTrendsChart.js
│ ├── ComplianceCoverageChart.js
│ ├── ExportControls.js
│ ├── Sidebar.js
│ ├── ThemeToggle.js
│ ├── NotificationDropdown.js
│ └── Search.js
├── redux/
│ └── slices/
│ └── alertsSlice.js ...
├── App.js
├── app.css
└── store.js


---

##  How to Run Locally
code is in master branch

```bash
git clone https://github.com/bhavanakarode/grc-dashboard.git
cd grc-dashboard
npm install
npm start





