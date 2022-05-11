import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity,StatusBar} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'



export default function Home() {
const [id,setId]= useState(null)


const dispatch = useDispatch()

const getId  = async () => {
  try {
    const value = await AsyncStorage.getItem('@id');
    if (value !== null) {
     setId(value)
    }
  } catch (error) {
console.log(err) 
 }
};



  const [deplacementList, setDeplacementList] = useState([])
  const [loading, setLoading] = useState(false)

  //ux homme screen

  const navigation = useNavigation()



  return (
      <View style={styles.contenair}>
      <View style={styles.homeHeader}>
        <View style={styles.headerContent}>
     
          <Text style={styles.headerTitle}>
            Appuyez ici pour scanner un vehicule
          </Text>

        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Scanner")}
          style={styles.strtScanButton}>
          <Image source={require('../../assets/qr_code.png')} style={styles.qrCode} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Auth")} style={styles.deplacementButton}>
        <Text style={styles.deplacementButtonText}>
          Déplacements
        </Text>
      </TouchableOpacity>
      <StatusBar backgroundColor="#18172a" barStyle="light-content" />
      </View>
  )
}


const styles = StyleSheet.create({
  contenair: {
    flex: 1,
    backgroundColor: "#18172a",
    justifyContent: "center",
  },
  homeHeader: {
    height: 300,
    backgroundColor: "#ff4000",
    justifyContent: "center",
    alignItems: "center",
    
  },
  headerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  strtScanButton: {
    zIndex: 2,
    width: 150,
    height: 150,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  qrCode: {
    width: 140,
    height: 140,
    borderRadius: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    height: 70,
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
    padding: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  homeBody: {
    zIndex: -1,
    backgroundColor: "#18172a",
  },
  deplacementList: {
    marginTop: 10,
    backgroundColor:"red",
    backgroundColor: "#18172a",
  },
  card: {
    padding: 10,
    marginVertical: 1,
    marginHorizontal: 10,
    backgroundColor: "#283042",
    borderRadius: 10

  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  cardSubTitle: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  lieu: {
    color: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lieuText: {
    color: "#fff",
    marginBottom: 8,
    fontSize: 11,
  },
  deplacementButton: {
    marginTop: 10,
    backgroundColor: "#ff4000",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  deplacementButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  homeHeader: {
    height: 300,
    backgroundColor: "#ff4000",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

})



