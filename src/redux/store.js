import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import alertsReducer from './slices/alertsSlice';
import complianceReducer from './slices/complianceSlice';
import riskReducer from './slices/riskSlice';
import searchReducer from './slices/searchSlice';
import sidebarReducer from './slices/sidebarSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    alerts: alertsReducer,
    compliance: complianceReducer,
    risk: riskReducer,
    sidebar: sidebarReducer,
    search: searchReducer,

  }
});
