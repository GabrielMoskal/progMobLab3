/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import _ from 'lodash';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.btnShowName = "Pokaż";
    this.btnHideName = "Ukryj";
    this.state = {
      isHidden: true,
      btnName: this.btnShowName
    };
  }

  onPress = () => {
    this.setState({
      isHidden: !this.state.isHidden,
      btnName: !this.state.isHidden ? this.btnShowName : this.btnHideName
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Zadanie 2</Text>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>{this.state.btnName}</Text>
        </TouchableOpacity>
        {
          this.state.isHidden ? <View/> :
          <View>
            <Text>Nazywam się</Text>
            <Text>Gabriel Moskal</Text>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});
