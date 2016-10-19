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
            nextItem: Item1
        })
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
                <Text>Item2 Page</Text>

                <TouchableOpacity onPress={() => this.props.onPress(Item1)}>
                    <Text style={{ color: '#55ACEE' }}>点我到Item1</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Item2;