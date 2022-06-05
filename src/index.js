import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Auth0ProviderWithHistory from './components/Auth/Auth0ProviderWithNavigate';
import { BrowserRouter } from 'react-router-dom';
import './tailwind.css';

const onRedirectCallback = (appState) => {
	history.push(
		appState && appState.returnTo
			? appState.returnTo
			: window.location.pathname
	);
};

const providerConfig = {
	domain: process.env.REACT_APP_AUTH0_DOMAIN,
	clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
	...(process.env.audience ? { audience: process.env.audience } : null),
	redirectUri: window.location.origin,
	onRedirectCallback,
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<Auth0ProviderWithHistory>
			<App />
		</Auth0ProviderWithHistory>
	</BrowserRouter>
);
