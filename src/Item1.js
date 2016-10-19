'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  BackAndroid
} from 'react-native';
import NavigationBar from './Navigation';
import Item2 from './Item2';
import Item3 from './Item3';

class Item1 extends Component {

  _leftItemAction() {
    BackAndroid.exitApp();
  }

  _rightItemAction() {
    alert('右侧按钮点击了');
  }

  render() {
    return (
      <View>
        <NavigationBar
          title='这个是标题'
          titleTextColor="red"
          leftItemTitle="点我到Item2"
          leftTextColor="#123456"
          rightItemTitle='forward'
          rightTextColor='#3393F2'
          leftItemFunc={() => this.props.onPress(Item2)}
          rightItemFunc={this._rightItemAction.bind(this)} />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity onPress={() => this.props.onPress(Item3)}>
          <Text style={styles.instructions}>
           点我到Item3
        </Text>
        </TouchableOpacity>

        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Item1;