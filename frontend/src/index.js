import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Login.css'
import './NavBar.css'
import App from './App';

import { UserContextProvider } from './context/UserContext';
import { PatientsContextProvider } from './context/PatientsContext';
import { AuthContextProvider } from './context/AuthContext';
import { SchedulesContextProvider } from './context/ScheduleContext';
import { StatisticsContextProvider } from './context/StatisticsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <StatisticsContextProvider>
          <SchedulesContextProvider>
            <PatientsContextProvider>
              <App/>
            </PatientsContextProvider>
          </SchedulesContextProvider>
        </StatisticsContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
