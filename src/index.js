import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import App from './App';
import history from './utils/history';
import { Auth0Provider } from '@auth0/auth0-react';
import AuthConfig from './AuthConfig';

const onRedirectCallback = (appState) => {
	history.push(
		appState && appState.returnTo
			? appState.returnTo
			: window.location.pathname
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

const providerConfig = {
	domain: AuthConfig.domain,
	clientId: AuthConfig.clientId,
	...(AuthConfig.audience ? { audience: AuthConfig.audience } : null),
	redirectUri: window.location.origin,
	onRedirectCallback,
};

root.render(
	<Auth0Provider {...providerConfig}>
		<App />
	</Auth0Provider>
);
