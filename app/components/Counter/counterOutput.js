import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './counter.css';

export class CounterOutput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.marginBox}>
        <Text>{String(this.props.value)}</Text>
      </View>
    );
  }

}
