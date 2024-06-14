import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
} from "react-native";
import Colors from "./Colors";
import { AntDesign } from "@expo/vector-icons";
import tempData from "./tempData";
import ToDoList from "./components/ToDoList";
import AddListModal from "./components/AddListModal";

export default class App extends React.Component {
  state = {
    addToDoVisible: false,
    lists: tempData,
  };

  toggleAddToDoModal = () => {
    this.setState({ addToDoVisible: !this.state.addToDoVisible });
  };

  renderList = (list) => {
    return <ToDoList list={list} updateList={this.updateList} />;
  };

  addList = (list) => {
    this.setState({
      lists: [
        ...this.state.lists,
        { ...list, id: this.state.lists.length + 1, todos: [] },
      ],
    });
  };

  updateList = (list) => {
    this.setState({
      lists: this.state.lists.map((item) => {
        return item.id === list.id ? list : item;
      }),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          visible={this.state.addToDoVisible}
          onRequestClose={this.toggleAddToDoModal}
        >
          <AddListModal
            closeModal={this.toggleAddToDoModal}
            addList={this.addList}
          />
        </Modal>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            To do
            <Text style={{ fontWeight: "300", color: Colors.blue }}> List</Text>
          </Text>
          <View style={styles.divider} />
        </View>
        <View style={{ marginVertical: 48 }}>
          <TouchableOpacity
            style={styles.addList}
            onPress={this.toggleAddToDoModal}
          >
            <AntDesign name="plus" size={16} color={Colors.blue} />
          </TouchableOpacity>
          <Text style={styles.add}>Agregar</Text>
        </View>
        <View style={{ height: 350, padding:10 }}>
          <FlatList
            data={this.state.lists}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => this.renderList(item)}
            keyboardShouldPersistTaps='always'
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: Colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: Colors.black,
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    borderColor: Colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    color: Colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
});
