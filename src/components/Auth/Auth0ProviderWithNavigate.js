import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import AuthConfig from '../../AuthConfig';
import PropTypes from 'prop-types';

const Auth0ProviderWithNavigate = ({ children }) => {
	const domain = AuthConfig.domain;
	const clientId = AuthConfig.clientId;

	const navigate = useNavigate();

	const onRedirectCallback = (appState) => {
		navigate.push(appState?.returnTo || window.location.pathname);
	};

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			redirectUri={window.location.origin}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	);
};

Auth0ProviderWithNavigate.propTypes = {
	children: PropTypes.object,
};

export default Auth0ProviderWithNavigate;
