 import React, { Component } from 'react'
 import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
 import {AntDesign} from '@expo/vector-icons';
 import colors from '../Colors';
 
 export default class AddListModal extends React.Component {
     render() {
         return (
             <KeyboardAvoidingView behavior="padding" style={styles.container}>
                 <TouchableOpacity style={{position: 'absolute', top: 64, right: 32}}>
                    <AntDesign name="close" size={24} color={colors.black} onPress={this.props.closeModal}/>
                 </TouchableOpacity>
                 <Text>Modal</Text>
             </KeyboardAvoidingView>
         )
     }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',

     }
 })

 