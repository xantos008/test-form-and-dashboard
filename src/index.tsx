import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './pages/index';
import {persistor, store} from './store';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}>
                    <App />
                </GoogleOAuthProvider>
            </PersistGate>
        </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);
