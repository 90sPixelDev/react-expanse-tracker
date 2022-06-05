import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import Auth0ProviderWithHistory from './components/Auth/Auth0ProviderWithNavigate';
import AuthConfig from './AuthConfig';
import './tailwind.css';
import { BrowserRouter } from 'react-router-dom';

const onRedirectCallback = (appState) => {
	history.push(
		appState && appState.returnTo
			? appState.returnTo
			: window.location.pathname
	);
};

const providerConfig = {
	domain: AuthConfig.domain,
	clientId: AuthConfig.clientId,
	...(AuthConfig.audience ? { audience: AuthConfig.audience } : null),
	redirectUri: window.location.origin,
	onRedirectCallback,
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		{/* <Auth0Provider {...providerConfig}> */}
		<Auth0ProviderWithHistory>
			<App />
		</Auth0ProviderWithHistory>
		{/* </Auth0Provider> */}
	</BrowserRouter>
);
