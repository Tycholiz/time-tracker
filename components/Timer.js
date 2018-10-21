import PropTypes from 'prop-types';

import helpers from '../utils/helpers';
const { renderElapsedString } = helpers

import React from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import TimerButton from './TimerButton';

export default class Timer extends React.Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		project: PropTypes.string.isRequired,
		elapsed: PropTypes.number.isRequired,
		isRunning: PropTypes.bool.isRequired,
		onEditPress: PropTypes.func.isRequired,
		onRemovePress: PropTypes.func.isRequired,
		onStartPress: PropTypes.func.isRequired,
		onStopPress: PropTypes.func.isRequired,
	};

	handleRemovePress = () => {
		// const { id, onRemovePress } = this.props;
		this.props.onRemovePress(this.props.id); //when this line gets executed, onRemovePress bubbles up to App.js, which causes handleRemovePress in App.js to trigger
	};

	handleStartPress = () => {
		const { id, onStartPress } = this.props;
		onStartPress(id);
	};

	handleStopPress = () => {
		const { id, onStopPress } = this.props;
		onStopPress(id);
	}

	renderActionButton() {
		const { isRunning } = this.props;

		if (isRunning) {
			return (
				<TimerButton
					color="tomato"
					title="Stop"
					onPress={this.handleStopPress}
				/>
			)
		} else {
			return (
				<TimerButton
					color="#21BA45"
					title="Start"
					onPress={this.handleStartPress}
				/>
			)
		}
	}

	render() {
		const { title, project, elapsed, onEditPress } = this.props;
		const elapsedString = renderElapsedString(elapsed);
		return (
			<View style={styles.timerContainer}>
				<Text style={styles.title}>
					{title}
				</Text>
				<Text>
					{project}
				</Text>
				<Text style={styles.elapsedTime}>
					{elapsedString} hours
			</Text>
				<View style={styles.buttonGroup}>
					<TimerButton
						color="blue"
						small
						title="Edit"
						onPress={onEditPress}
					/>
					<TimerButton
						color="blue"
						small
						title="Remove"
						onPress={this.handleRemovePress}
					/>
				</View>
				{this.renderActionButton()}
			</View>
		);
	}
}

	const styles = StyleSheet.create({
		timerContainer: {
			backgroundColor: 'white',
			borderColor: '#d6d7da',
			borderWidth: 2,
			borderRadius: 10,
			padding: 15,
			margin: 15,
			marginBottom: 0,
		},
		title: {
			fontSize: 14,
			fontWeight: 'bold',
		},
		elapsedTime: {
			fontSize: 26,
			fontWeight: 'bold',
			textAlign: 'center',
			paddingVertical: 15,
		},
		buttonGroup: {
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
	});