import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./styles/tabs.css";
import "./styles/cvSide.css";
import Index from './Index';
import { AuthProvider } from './components/Auth';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Index />
      </AuthProvider>
    </BrowserRouter>
      {/* <GoogleAuth />- */}
    {/* <App /> */}
  </React.StrictMode>
);
