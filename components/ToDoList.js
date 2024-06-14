import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import Colors from "../Colors";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";
import ToDoModal from "./ToDoModal";
export default class ToDoList extends React.Component {
  state = {
    showListVisible: false,
  };
  toggleListModal() {
    this.setState({ showListVisible: !this.state.showListVisible });
  }
  render() { 
    const list = this.props.list;

    const completedCount = list.todos.filter((todo) => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;

    return (
      <View>
        <Modal
          animationType="slide"
          visible={this.state.showListVisible}
          onRequestClose={() => this.toggleListModal()}
        >
          <ToDoModal list={list} closeModal={() => this.toggleListModal()} updateList={this.props.updateList} />
        </Modal>
        <TouchableOpacity
          style={[styles.listContainer, { backgroundColor: list.color }]}
          onPress={() => this.toggleListModal()}
        >
          <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
          </Text>
          <View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.count}>{remainingCount}</Text>
              <Text style={styles.subtitle}>Pendientes</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.count}>{completedCount}</Text>
              <Text style={styles.subtitle}>Completadas</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: "center",
    width: 200,
  },
  listTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: Colors.white,
    marginBottom: 18,
  },
  count: {
    fontSize: 30,
    fontWeight: "200",
    color: Colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: Colors.white,
  },
});
