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
            isRunning //specify if timer is running
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
