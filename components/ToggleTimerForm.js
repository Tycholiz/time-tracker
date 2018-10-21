import PropTypes from 'prop-types';

import React from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

// we define this as a function instead of a class because it does not need to manage state.  we call them 'functional components'. Think of these comp's as ones that only need to implement the render() method. they don't manage state, and therefore dont need any lifecycle hooks. we use functional comp's b/c 1. it forces us to try to manage less state, reducing complexity, and 2. they are more reusable since they need to have all their configuration passed from the outside.
export default class ToggleableTimerForm extends React.Component {
	static propTypes = {
		onFormSubmit: PropTypes.func.isRequired,
	};

	state = {
		isOpen: false,
	};

	// handleFormOpen = () => {
	// 	this.setState({ isOpen: false });
	// };
	handleFormOpen = () => {
		if (this.state.isOpen) {
			this.setState({ isOpen: false });
		} else {
			this.setState({ isOpen: true });
		}
	};

	handleFormSubmit = timer => {
		const { onFormSubmit } = this.props;

		onFormSubmit(timer);
		this.setState({ isOpen: false });
	};

	handleFormClose = () => {
		this.setState({ isOpen: false })
	};

	render() {
		const { isOpen } = this.state;

		return (
			<View style={[styles.container, !isOpen && styles.buttonPadding]}>
				{isOpen ? (
					<TimerForm
						onFormSubmit={this.handleFormSubmit} //these are prop-functions that we are passing down to TimerForm
						onFormClose={this.handleFormClose}
					/>
				) : (
					<TimerButton title='+' color='black' onPress={this.handleFormOpen} />
				)}
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
	},
	buttonPadding: {
		paddingHorizontal: 15,
	},
});
