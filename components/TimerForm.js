import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
} from 'react-native';

import TimerButton from './TimerButton';

export default class TimerForm extends React.Component {
	constructor(props) { //because we’re checking and defining our state based on props, we’re using the constructor() for state initialization instead of defining state as a class property.
		super(props);
		const { id, title, project } = props;

		this.state = {
			title: id ? title : '',
			project: id ? project : '',
		};
	}

	handleTitleChange = title => {
		this.setState({ title })
	};

	handleProjectChange = project => {
		this.setState({ project })
	};

	handleSubmit = () => {
		const { onFormSubmit, id } = this.props;
		const { title, project } = this.state;

		onFormSubmit({
			id,
			title,
			project,
		});
	};

	render() {
		const { id, onFormClose } = this.props; //Notice that we’re reading id via props and reading title and project from state. This is because we want to supply the function with the up - to - date values of title and project(in state) as opposed to the initial values(supplied as props). const { title, project } = this.state;

		const submitText = id ? 'Update' : 'Create';

		return (
			<View style={styles.formContainer}>

				<View style={styles.attributeContainer}>
					<Text style={styles.textInputTitle}>
						Title
					</Text>
					<View style={styles.textInputContainer}>
						<TextInput
							style={styles.textInput}
							underlineColorAndroid='transparent'
							// value={title} //we add this line because when the form is used for editing, we want the existing title to prepopulate the textfield
							onChangeText={this.handleTitleChange}
						/>
					</View>
				</View>

				<View style={styles.attributeContainer}>
					<Text style={styles.textInputTitle}>
						Project
					</Text>
					<View style={styles.textInputContainer}>
						<TextInput
							style={styles.textInput}
							underlineColorAndroid='transparent'
							// value={project}
							onChangeText={this.handleProjectChange}
						/>
					</View>
				</View>

				<View style={styles.buttonGroup}>
					<TimerButton
						small
						color='#21BA45'
						title={submitText}
						onPress={this.handleSubmit}
					/>
					<TimerButton
						small
						color='#Db2828'
						title='Cancel'
						onPress={onFormClose}
					/>
				</View>

			</View>
		);
	}
}


const styles = StyleSheet.create({
	formContainer: {
		backgroundColor: 'white',
		borderColor: '#D6D7DA',
		borderWidth: 2,
		borderRadius: 10,
		padding: 15,
		margin: 15,
		marginBottom: 0,
	},
	attributeContainer: {
		marginVertical: 8,
	},
	textInputContainer: {
		borderColor: '#D6D7DA',
		borderRadius: 2,
		borderWidth: 1,
		marginBottom: 5,
	},
	textInput: {
		height: 30,
		padding: 5,
		fontSize: 12,
	},
	textInputTitle: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	buttonGroup: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});