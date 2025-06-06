export const riskData = {
  score: 72,
  topCategories: ['Data Privacy', 'Vendor Risk', 'Access Control']
};

export const complianceData = {
  ISO27001: 90,
  SOC2: 65,
  GDPR: 75,
  coverage: {
    labels: ['HR', 'IT', 'Finance', 'Operations'],
    data: [30, 45, 50, 60]
  }
};

export const alertsData = [
  { id: 1, message: 'Unauthorized login detected', severity: 'High' },
  { id: 2, message: 'Outdated antivirus', severity: 'Medium' },
  { id: 3, message: 'Suspicious file download', severity: 'Low' }
];

export const trendsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  data: [60, 65, 70, 72]
};
