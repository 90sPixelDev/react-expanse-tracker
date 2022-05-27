import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const classes = {
	backdrop:
		'fixed z-10 top-0 left-0 flex flex-row place-items-center place-content-center bg-gray-800 bg-opacity-50 w-[100vw] h-[100vh]',
	container: 'absolute w-[20vw] h-[10vh] p-4 bg-white rounded-lg',
	title: 'm-auto mb-1 text-lg font-bold text-center',
	text: 'm-auto text-center',
	button: 'flow-root m-auto mt-2 bg-gray-300 px-4 py-1 rounded-lg border-gray-500 border-2 hover:bg-gray-400',
};

const ModalBackdrop = (props) => {
	return (
		<div className={classes.backdrop} id='modal-backdrop'>
			{' '}
			<div className={classes.container}>
				<h1 className={classes.title}>Error!</h1>
				<p className={classes.text}>
					Invalid expense info provided.
				</p>
				<button
					className={classes.button}
					onClick={props.onConfirm}
				>
					Ok
				</button>
			</div>
		</div>
	);
};

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<ModalBackdrop onConfirm={props.finalConfirm} />,
				document.getElementById('backdrop-root')
			)}
		</>
	);
};

Modal.propTypes = {
	finalConfirm: PropTypes.func,
};
ModalBackdrop.propTypes = {
	onConfirm: PropTypes.func,
};

export default Modal;
