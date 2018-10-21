import PropTypes from 'prop-types';

import React from 'react';

import TimerForm from './TimerForm';
import Timer from './Timer';

//these are props. we don't use 'this' when working with functional comp's
export default class EditableTimer extends React.Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		project: PropTypes.string.isRequired,
		elapsed: PropTypes.number.isRequired,
		isRunning: PropTypes.bool.isRequired,
		onFormSubmit: PropTypes.func.isRequired,
		onRemovePress: PropTypes.func.isRequired,
		onStartPress: PropTypes.func.isRequired,
		onStopPress: PropTypes.func.isRequired,
	};

	state = {
		editFormOpen: false,
	};

	handleEditPress = () => {
		this.openForm();
	};

	handleFormClose = () => {
		this.closeForm();
	};

	handleSubmit = timer => {
		const { onFormSubmit } = this.props;
		onFormSubmit(timer);
		this.closeForm();
	};

	closeForm = () => {
		this.setState({
			editFormOpen: false
		});
	};

	openForm = () => {
		this.setState({
			editFormOpen: true
		});
	};

	render() {
		const { id, title, project, elapsed, isRunning, onRemovePress, onStartPress, onStopPress } = this.props;
		const { editFormOpen } = this.state;

		if (editFormOpen) {
			return <TimerForm
				id={id}
				title={title}
				project={project}
				onFormSubmit={this.handleSubmit} //pass methods down as props
				onFormClose={this.handleFormClose}
			/>
		}
		return (
			<Timer
				id={id}
				title={title}
				project={project}
				elapsed={elapsed}
				isRunning={isRunning}
				onEditPress={this.handleEditPress}
				onRemovePress={onRemovePress} //editableTimer is simply acting as a relay here, passing along the prop from App to Timer. Basically, App is passing down to Timer the ability to call handleRemovePress (as defined in App.js)
				onStartPress={onStartPress}
				onStopPress={onStopPress}
			/>
		);
	}
}
