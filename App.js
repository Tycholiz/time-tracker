import uuidv4 from 'uuid/v4';
import { newTimer } from './utils/timer';

import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';

import EditableTimer from './components/EditableTimer';
import ToggleTimerForm from './components/ToggleTimerForm';

export default class App extends React.Component {
  state = { //we’re leaning on the Babel plugin transform-class-properties to help simplify how we define our initial state.
    timers: [
      {
        title: 'Mow the lawn',
        project: 'House Chores',
        id: uuidv4(),
        elapsed: 5456099,
        isRunning: true,
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuidv4(),
        elapsed: 1273998,
        isRunning: false,
      },
    ],
  };

  handleCreateFormSubmit = timer => {
    const { timers } = this.state;

    this.setState({
      timers: [newTimer(timer), ...timers], //notice we set this.state.timers to a new array of timers. the first element is array is the new timer, while the second element (w/ spread syntax) adds the already existing timers to the new array. We do this to avoid mutating state. We do not want to use push() here, as that would mutate state. remember, we never want to mutate state outside of this.setState({}). as a general rule, never use push() on state, because push modifies existing array, while spread operator copies and modifies original.
    });
  };

  render() {
    const { timers } = this.state

    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Timers
          </Text>
        </View>
        <ScrollView style={styles.timerList}>
          <ToggleTimerForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
          {timers.map(({ title, project, id, elapsed, isRunning }) => ( //will call once per item in the array.
            <EditableTimer
              key={id}
              title={title}
              project={project}
              elapsed={elapsed}
              isRunning={isRunning} //specify if timer is running
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    // paddingTop: 35,
    // paddingBottom: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: '#D6D7DA',
  },
  title: {
    // fontSize: 18,
    // fontWeight: 'bold',
    // textAlign: 'center',
  },
  timerList: {
    // paddingBottom: 15,
  },
});
