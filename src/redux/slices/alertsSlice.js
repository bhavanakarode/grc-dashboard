import { createSlice } from '@reduxjs/toolkit';

const alertsSlice = createSlice({
  name: 'alerts',
  initialState: [
    { id: 1, message: 'Phishing Attempt', severity: 'High' },
    { id: 2, message: 'Unauthorized Access', severity: 'Medium' },
    { id: 3, message: 'Malware Detected', severity: 'High' }
  ],
  reducers: {}
});

export default alertsSlice.reducer;
