import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { UserContextProvider } from './context/UserContext';
import { PatientsContextProvider } from './context/PatientsContext';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <PatientsContextProvider>
          <App />
        </PatientsContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
