import React from 'react';
import PropTypes from 'prop-types';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const SignFormParent = (props, ref) => {
	const classes = {
		body: 'bg-gray-200 max-w-[250px] border-[1px] border-gray-300 rounded-lg p-4 flex flex-col gap-4',
	};

	const [animParent] = useAutoAnimate();

	return (
		<article className={classes.body} ref={animParent}>
			{props.children}
		</article>
	);
};

SignFormParent.propTypes = {
	children: PropTypes.node,
};

export default SignFormParent;
