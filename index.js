'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator,
  NativeModules,
  ToastAndroid
} from 'react-native';

import Item1 from './src/Item1';
import Item2 from './src/Item2';

export default class Libery extends React.Component {

    render() {
        var defaultName;
        NativeModules.IntentModule.dataToJS((msg) => {
                 if(msg=="Item1"){console.log("1:"+msg);defaultName=msg;}
                 if(msg=="Item2"){console.log("2:"+msg);defaultName=msg;}
                 console.log(defaultName+":"+ (defaultName=="Item1"?"q":"w"));
                 ToastAndroid.show('JS界面:从Activity中传输过来的数据为:'+msg,ToastAndroid.SHORT);
                 },(result) => {
                 ToastAndroid.show('JS界面:错误信息为:'+result,ToastAndroid.SHORT);})

        return (
        <Navigator
          initialRoute={{ name: defaultName, component: Item2}}
          configureScene={(route) => {
            //跳转的动画
            return Navigator.SceneConfigs.FadeAndroid;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            if(route.component){
                return <Component  navigator={navigator} />
            }
          }} />
        );
    }
}

AppRegistry.registerComponent('Libery', () => Libery);