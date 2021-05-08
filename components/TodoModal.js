import React, { Component } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import {AntDesign} from '@expo/vector-icons';
import colors from '../Colors';

export default class TodoModal extends React.Component {

    render() {
        const list = this.props.list;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{position: 'absolute', top: 64, right: 32}}>
                    <AntDesign name="close" size={24} color={colors.black} onPress={(list) => list.toggleListModal} ></AntDesign>
                </TouchableOpacity>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})