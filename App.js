import uuidv4 from 'uuid/v4';

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
  state = { //e’re leaning on the Babel plugin transform-class-properties to help simplify how we define our initial state.
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
          <ToggleTimerForm />
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
