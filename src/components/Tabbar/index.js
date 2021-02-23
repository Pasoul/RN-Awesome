import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Tabbar extends React.Component {
  render() {
    return <View style={styles.wrapper}></View>;
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'fixed',
    bottom: 0,
  },
});
