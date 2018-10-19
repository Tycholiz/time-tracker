import React from 'react';
import {
	StyleSheet,
	View,
	ScrollView,
	Text,
} from 'react-native';

import TimerForm from './TimerForm';
import Timer from './Timer';

// we define this as a function instead of a class because it does not need to manage state.  we call them 'functional components'. Think of these comp's as ones that only need to implement the render() method. they don't manage state, and therefore dont need any lifecycle hooks. we use functional comp's b/c 1. it forces us to try to manage less state, reducing complexity, and 2. they are more reusable since they need to have all their configuration passed from the outside.
//these are props. we don't use 'this' when working with functional comp's
export default function EditableTimer({id, title, project, elapsed, isRunning, editFormOpen}) {
	if (editFormOpen) {
		return <TimerForm id={id} title={title} project={project} />;
	}
	return (
		<Timer
			id={id}
			title={title}
			project={project}
			elapsed={elapsed}
			isRunning={isRunning}
		/>
	);
}
