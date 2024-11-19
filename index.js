import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Filme = ({ data }) => {
  return (
    <View>
      <Text style={styles.nomeFilme}>{data.nome}</Text>
      <TouchableOpacity onPress={() => alert(data.nome)}>
        <Image style={styles.capaFilme} source={{ uri: data.foto }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  nomeFilme: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  capaFilme: {
    width: 200,
    height: 250,
    borderRadius: 30,
    alignSelf: "center",
  },
});

export default Filme;
