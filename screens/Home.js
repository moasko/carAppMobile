import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function Home() {

  const navigation = useNavigation()

  return (
    <View style={styles.contenaire}>
      <Text style={{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 60,
        padding:20
      }} >Déplacez-vous en toute sécurité</Text>

      <Image source={require('../assets/qr.jpg')} style={styles.image} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Scanner')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Scanner un taxi</Text>
      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  contenaire: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  },
  startMessage: {
    backgroundColor: "#fff",
    padding: 20,
  },
  image: {
    width: 300,
    height: 200,
    margin: 20
  },
  button: {
    width: "80%",
    backgroundColor: "#F96E26",
    padding: 20,
    borderRadius: 50,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#F96E26",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    
    elevation: 13,

  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  }
})



