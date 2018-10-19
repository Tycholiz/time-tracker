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
  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Timers
          </Text>
        </View>
        <ScrollView style={styles.timerList}>
          <ToggleTimerForm isOpen={false} />
          <EditableTimer
            id='1'
            title='Mow the lawn'
            project='House Chores'
            elapsed='8986300'
            isRunning
          />
          <EditableTimer
            id='2'
            title='Bake squash'
            project='Kitchen chores'
            elapsed='37758394'
            editFormOpen
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {

  },
  title: {

  },
  timerList: {

  },
});
