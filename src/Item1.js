'use strict';
import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, Image, View, TouchableOpacity, ListView, BackAndroid} from "react-native";
import NavigationBar from "./navigation/Navigation";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Request from "./Request";

export default class Item1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2,}),
            title: "Item1",
            loaded: false
        };
    }

    _onRowPress(rowData, rowID) {
        this.setState({title: rowData.title});
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableOpacity onPress={() => this._onRowPress(rowData, rowID)}>
                <View style={styles.row}>
                    <Image
                        style={styles.icon}
                        source={{uri: rowData.images.large}}/>
                    <View style={{flexDirection: 'column', marginLeft: 10}}>
                        <Text style={styles.text}>{rowData.title}</Text>
                        <Text style={styles.text}>{rowData.year}</Text>
                        <Text style={styles.text}>{rowData.rating.average}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    componentDidMount() {
        this._fetchData();
    }

    _fetchData() {
        Request.doubaiList().then(result => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(result.subjects),
                title: result.title,
                loaded: true
            });
        }).catch(error => {
            console.log(error);
        });
    }

    _leftItemAction() {
        this.props.navigator.push({
            component: Item3,
            params: {
                text: '呵呵呵呵'
            }
        });
    }

    _rightItemAction() {
        this.props.navigator.push({
            component: Item2,
            params: {
                text: '哈哈哈哈哈'
            }
        });
    }

    _renderLoadingView() {
        return (<View style={styles.container}>
                <Text>Loading movies......</Text>
            </View>
        );
    }

    _renderView() {
        return (
            <View style={{flex: 1}}>
                <NavigationBar
                    title={this.state.title}
                    titleTextColor="red"
                    leftItemTitle="BACK"
                    leftTextColor="#123456"
                    rightItemTitle='forward'
                    rightTextColor='#3393F2'
                    leftItemFunc={() => this._leftItemAction()}
                    rightItemFunc={() => this._rightItemAction()}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}/>
            </View>
        );
    }

    render() {
        if (!this.state.loaded) {
            return this._renderLoadingView();
        } else {
            return this._renderView();
        }
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    icon: {
        width: 100,
        height: 100,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    thumb: {
        width: 64,
        height: 64,
    },
    text: {
        flex: 1,
    },
});