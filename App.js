import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AntDesign} from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Modal } from 'react-native';
import colors from './Colors';
import tempData from './tempData'; 
import TodoList from './components/TodoList';
import AddListModal from './components/AddListModal';

export default class App extends React.Component {
  state = {
    addTodoVisible: false,
    lists: tempData
  };

  addList = list => {
    this.setState({lists: [...this.state.lists,{...list, id: this.state.lists.length+1, todos: []}] })
  }

  updateList = list => {
    this.setState({
      lists: this.state.lists.map(item => {
        return item.id === list.id ? list : item;
      })
    });
  };

  toggleAddTodoVisible() {
    this.setState({addTodoVisible: !this.state.addTodoVisible})
  }

  renderList = list => {
    return <TodoList list={list} updateList={this.updateList}/>
  }

  render() {
    return ( 
      <View style={styles.container}>
        <Modal 
        animationType="slide" 
        visible={this.state.addTodoVisible}
        onRequestClose={() => this.toggleAddTodoVisible()}>
          <AddListModal closeModal={() => this.toggleAddTodoVisible()} addList={this.addList}/>
        </Modal>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider} />
          <Text style={styles.title}>Taskos</Text>
          <View style={styles.divider} />
        </View>

        <View style={{marginVertical: 48, alignItems: 'center'}}>
          <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoVisible()}>
            <AntDesign name="plus" size={16} color={colors.blue}/>
          </TouchableOpacity>
          <Text style={styles.add}>Add</Text>
        </View>

        <View style={{height: 275, paddingLeft: 32}}>
          <FlatList data={this.state.lists} 
          keyExtractor={item => item.name} 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => this.renderList(item)}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: colors.lightblue,
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  title:{
    fontSize: 38,
    fontWeight: '800',
    color: colors.grey,
    paddingHorizontal: 64
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightblue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add: {
     color: colors.blue,
     fontWeight: '600',
     fontSize: 14,
     marginTop: 8
  }
});
