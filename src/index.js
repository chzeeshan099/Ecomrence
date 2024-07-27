import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store, persistor } from './ApiData/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import { msalConfig } from './auth/authConfig';
import { BrowserRouter } from 'react-router-dom';

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="460797798358-t1m8n24kodrln78mmn18c9gmbgjgilol.apps.googleusercontent.com">
      <MsalProvider instance={msalInstance}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          </PersistGate>
        </Provider>
      </MsalProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();






// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { store, persistor }  from './ApiData/Store';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { GoogleOAuthProvider } from '@react-oauth/google';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   <GoogleOAuthProvider clientId="460797798358-t1m8n24kodrln78mmn18c9gmbgjgilol.apps.googleusercontent.com">
//   <Provider store={store}>
//   <PersistGate loading={null} persistor={persistor}>
//     <App />
//   </PersistGate>
//   </Provider>
//   </GoogleOAuthProvider>
//   </React.StrictMode>
// )
// reportWebVitals();
