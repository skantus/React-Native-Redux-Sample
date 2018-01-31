import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import { styles } from './counter.css';

export class CounterControl extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.marginBox}>
        <Button rounded info
                onPress={this.props.clicked}
                title={this.props.label}>
        </Button>
      </View>
    );
  }
}
