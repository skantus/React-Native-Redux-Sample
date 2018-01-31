import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { styles } from './counter.css';

import { CounterControl } from './counterControl';
import { CounterOutput } from './counterOutput';

export class Counter extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.image} source={{ uri: 'http://devstickers.com/assets/img/pro/h8ci.png' }} />

        <CounterControl label="Increment" clicked={this.props.onIncrement} icon="beer"/>
        <CounterOutput value={this.props.count}/>
        <CounterControl label="Decrement" clicked={this.props.onDecrement} icon="cog"/>

      </View>
    );
  }
}
