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
	handleRemovePress = () => {
		// const { id, onRemovePress } = this.props;
		this.props.onRemovePress(this.props.id); //when this line gets executed, onRemovePress bubbles up to App.js, which causes handleRemovePress in App.js to trigger
		console.log("from Timer.js")
	};

	render() {
		const { title, project, elapsed } = this.props;
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
					/>
					<TimerButton
						color="blue"
						small
						title="Remove"
						onPress={this.handleRemovePress}
					/>
				</View>
				<TimerButton color="#21BA45" title="Start" />
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