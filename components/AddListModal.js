import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Touchable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../Colors";

export default class AddListModal extends React.Component {
  backgroundColors = [
    "#24A6D9",
    "#595BD9",
    "#8022D9",
    "#D159D8",
    "#D85963",
    "#D88559",
  ];
  state = {
    name: "",
    color: this.backgroundColors[0],
  };

  createToDo = () => {
    const { name, color } = this.state;
    const list = { name, color };
    this.props.addList(list);
    this.setState({ name: "" });
    this.props.closeModal();
  };
  renderColors() {
    return this.backgroundColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[
            styles.colorSelect,
            {
              borderColor: Colors.black,
              borderWidth: 1,
              backgroundColor: color,
            },
          ]}
          onPress={() => this.setState({ color })}
        />
      );
    });
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{ position: "absolute", top: 64, right: 32 }}
          onPress={this.props.closeModal}
        >
          <AntDesign name="close" size={24} color={Colors.black} />
        </TouchableOpacity>
        <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
          <Text style={styles.title}>Crea To Do List</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre de lista . . . "
            onChangeText={(text) => this.setState({ name: text })}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            {this.renderColors()}
          </View>
          <TouchableOpacity
            style={[styles.create, { backgroundColor: this.state.color }]}
            onPress={this.createToDo}
          >
            <Text
              style={{
                color: Colors.white,
                fontWeight: "600",
              }}
            >
              Crear!
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    alignSelf: "center",
    color: Colors.black,
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
});
