import React from 'react';

const Test = () => {
	const classes = {
		test: 'w-[100px] h-[100px] bg-green-500',
		scroll: 'h-full overflow-auto',
	};

	return (
		<div className={classes.test}>
			<div className={classes.scroll}>
				<p>TEST</p>
				<p>TEST</p>
				<p>TEST</p>
				<p>TEST</p>
				<p>TEST</p>
				<p>TEST</p>
				<p>TEST</p>
				<p>TEST</p>
				<p>TEST</p>
				<p>TEST</p>
				<p>TEST</p>
			</div>
		</div>
	);
};

export default Test;
