import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';


const InvalidQr = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#ff6600" }}>
            <View style={{
                width: "80%",
                height: "70%",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: 30,
                padding: 20,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 9,
                },
                shadowOpacity: 0.48,
                shadowRadius: 11.95,

                elevation: 18,

            }}>
                <Image source={require('../../assets/emo.jpg')} style={{ width: 100, height: 100 }} />
                <View>
                    <Text style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "#ff6600",
                    textAlign: "center",
                    marginBottom: 10,
                }}>Code QR invalide</Text>
                <Text style={{
                    fontSize: 15,
                    color: "gray",
                    textAlign: "center"
                }}>Vous avez scanné un mauvais code, veuillez scanner le code QR de votre Taxi.</Text>
                </View>
                
                
                <TouchableOpacity
                    style={{
                        display: "flex",
                        width: "90%",
                        padding: 10,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#ff6600",
                        borderRadius: 30,
                        marginTop: "10%"
                    }}
                    onPress={() => navigation.pop()}>
                        <Icon name="refresh" style={{marginRight:10}} size={30} color="#fff" />
                    <Text style={{
                        color: "#fff",
                        fontSize: 20,
                        fontWeight: "bold"
                    }}>Réessayer</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default InvalidQr