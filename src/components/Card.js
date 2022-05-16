function Card(props) {
	const classes = 'rounded-3xl' + props.className;

	return <div className={classes}>{props.children}</div>;
}

export default Card;
