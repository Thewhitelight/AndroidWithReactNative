'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid
} from 'react-native';
import NavigationBar from './Navigation';

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
          leftItemTitle="点我到下一个"
          leftTextColor="#123456"
          rightItemTitle='forward'
          rightTextColor='#3393F2'
          leftItemFunc={() => this.props.onPress()}
          rightItemFunc={this._rightItemAction.bind(this)} />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
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