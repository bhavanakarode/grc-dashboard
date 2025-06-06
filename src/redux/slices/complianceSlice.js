import { createSlice } from '@reduxjs/toolkit';

const complianceSlice = createSlice({
  name: 'compliance',
  initialState: {
    ISO27001: 90,
    SOC2: 75,
    GDPR: 60,
    coverage: {
      labels: ['HR', 'IT', 'Finance', 'Operations'],
      data: [25, 45, 30, 50]
    }
  },
  reducers: {}
});

export default complianceSlice.reducer;
