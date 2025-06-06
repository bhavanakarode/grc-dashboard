import { createSlice } from '@reduxjs/toolkit';

const riskSlice = createSlice({
  name: 'risk',
  initialState: {
    score: 72,
    categories: ['Data Privacy', 'Vendor Risk', 'Access Control'],
    trend: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      data: [60, 65, 70, 68, 72]
    }
  },
  reducers: {}
});

export default riskSlice.reducer;
