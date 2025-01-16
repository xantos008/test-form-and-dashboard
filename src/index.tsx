import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './pages/index';
import { store } from './store';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
        <Provider store={store}>
            <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
                <App />
            </GoogleOAuthProvider>
        </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);
