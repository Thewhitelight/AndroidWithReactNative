'use strict';
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Item1 from './Item1';

class Item2 extends Component {
    _openPage() {
        this.props.navigator.push({
            title: 'Item1',
            component: Item1
        })
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
                <Text>Splash Page</Text>

                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <Text style={{ color: '#55ACEE' }}>点我到上一个</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Item2;