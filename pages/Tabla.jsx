import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "native-base";

export default function Tabla() {
  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <TouchableOpacity onPress={() => console.log("Probando ando")}>
          <Text style={styles.tituloText}>Titulo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("Probando Probando")}>
          <Text style={styles.tituloText}>Titulo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("Probando 123")}>
          <Text style={styles.tituloText}>Titulo</Text>
        </TouchableOpacity>
      </View>

      {/* <Button
        colorScheme="secondary"
        onPress={() => console.log("hello world")}
      > */}
         {/* <View style={styles.contTabla}>
        <Text style={styles.text}>Hola!</Text>
        </View>  */}
      {/* </Button> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1800,
    width: "auto",
    backgroundColor: "#000000",
    // alignItems: "center",
    // justifyContent: "space-evenly",
  },
  titulo: {
    flexDirection: "row",
    alignSelf: "center",
    top: 30,
    width: 380,
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 30,
  },
  tituloText: {
    color: "#ffffff",
    height: 50,
    width: 126.3,
    textAlign: "center",
    textAlignVertical: "center",
    justifyContent: "center",
  },
  contTabla: {
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  text: {
    color: "#088880",
    backgroundColor: "red",
    borderRadius: 100,
    height: 150,
    width: 150,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
