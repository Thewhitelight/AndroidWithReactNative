'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator,
  NativeModules,
  ToastAndroid,
  BackAndroid
} from 'react-native';

import Item1 from './src/Item1';
import Item2 from './src/Item2';

export default class Libery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultComponent: null
    };
  }

   componentWillMount() {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
  }

  componentDidMount() {
    NativeModules.IntentModule.dataToJS((msg) => {
      console.log("msg" + msg);
      if (msg == "ReactNativeActivity") { console.log("1:" + msg); this.setState({ defaultComponent: Item1 }); }
      if (msg == "ReactViewActivity") { console.log("2:" + msg); this.setState({ defaultComponent: Item2 }); }
      ToastAndroid.show('JS界面:从Activity中传输过来的数据为:' + msg, ToastAndroid.SHORT);
    }, (result) => {
      ToastAndroid.show('JS界面:错误信息为:' + result, ToastAndroid.SHORT);
    });
  }
  
  componentWillUnmount() {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }

  onBackAndroid = () => {
    const nav = this.navigator;
    const routers = nav.getCurrentRoutes();
    if (routers.length > 1) {
      nav.pop();
      return true;
    }
    return false;
  };

  render() {
    if (!this.state.defaultComponent) return <View />;

    return (
      <Navigator
        initialRoute={{ component: this.state.defaultComponent }}
        configureScene={(route) => {
          return Navigator.SceneConfigs.PushFromRight;
        } }
        renderScene={(route, navigator) => {
          this.navigator = navigator;
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        } } />
    );
  }
}

AppRegistry.registerComponent('Libery', () => Libery);
