import { View, Text, StyleSheet, ActivityIndicator, Image, Linking, ScrollView, Share, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCarInfos } from '../backend/carinfos';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Lightbox from 'react-native-lightbox-v2';
import { useIsFocused } from '@react-navigation/native';
import CustomHeader from '../components/customHeader';



function ScanneResults({ route, navigation }) {
  const { data } = route.params;
  const [carInfos, setCarInfos] = useState({});
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    getCarInfos(data)
      .then(res => {
        setLoading(false);
        setCarInfos(res.data);
      })
      .catch(err => {
        console.log(err);
      }).finally(() => {
        setLoading(false);
      })
  }, [])


  const share = async () => {
    try {
      const result = await Share.share({
        message: ` ${carInfos.immatriculation} ${carInfos.marque} ${carInfos.proprio}`,
        title: 'Share via'
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };



  const Divider = () => {
    return (
      <View style={styles.divider} />
    )
  }





  return (
    <>
      <CustomHeader navigation={navigation} />
    <ScrollView style={styles.container}>
      {
        loading ?
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><ActivityIndicator size="large" color="#0000ff" /></View>
          : (
            <View>

              <View style={styles.imageContainer}>
                <Lightbox
                  renderContent={() => <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}><Image source={{ uri: `https://carapptaxi.herokuapp.com/${carInfos.image}` }} style={{ width: "100%", height: 400 }} /></View>}
                >
                  <Image source={{ uri: `https://carapptaxi.herokuapp.com/${carInfos.image}` }} style={{ width: "100%", height: "100%" }} />
                </Lightbox>
              </View>

              <View style={styles.infoContainer}>
                <View style={styles.card}>

                  <View style={styles.infosItems}>
                    <Text style={styles.label}>Immatriculation</Text>
                    <Text style={styles.title}>{carInfos.immatriculation}</Text>
                  </View>
                  <Divider />

                  <View style={styles.infosItems}>
                    <Text style={styles.label}>Marque</Text>
                    <Text style={styles.title}>{carInfos.marque}</Text>
                  </View>
                  <Divider />

                  <View style={styles.infosItems}>
                    <Text style={styles.label}>Propritaire du vehicule</Text>
                    <Text style={styles.title}>{carInfos.proprio}</Text>
                  </View>
                  <Divider />

                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(`tel:${carInfos.telephone_proprietaire}`)
                    }}
                    style={styles.infosItems}
                  >
                    <Text style={styles.label}>Téléphone du Propritaire du vehicule</Text>
                    <Text style={styles.title}>+225 {carInfos.telephone}</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Ou allez vous ?</Text>
               
                </View>


                <View style={styles.card}>
                  <TouchableOpacity style={styles.shareButton} onPress={share}>
                    <Icon name="share" style={{ marginRight: 20 }} size={20} color="#fff" />
                    <Text style={styles.shareButtonText}>Partager</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('MapTrack', { data: carInfos.immatriculation })
                    }}
                    style={styles.startTravel}>
                    <Text style={styles.startTravelText}>Demarer</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.card}>
                  <Text style={styles.cardTitle}>En cas d'urgence</Text>
                  <View style={styles.urgenceCarde}>

                    <TouchableOpacity
                      style={styles.urgenceCardeItems}
                      onPress={() => {
                        Linking.openURL(`tel:170`)
                      }}
                    >
                      <Image source={require('../../assets/police.png')} style={{ width: 60, height: 60 }} />
                      <Text style={styles.urgenceText}>Police</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.urgenceCardeItems}
                      onPress={() => {
                        Linking.openURL(`tel:180`)
                      }}
                    >
                      <Image source={require('../../assets/sapeur-pompier.png')} style={{ width: 60, height: 60 }} />
                      <Text style={styles.urgenceText}>Pompiers</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        Linking.openURL(`tel:144`)
                      }}
                      style={styles.urgenceCardeItems}
                    >
                      <Image source={require('../../assets/ambulance.png')} style={{ width: 60, height: 60 }} />
                      <Text style={styles.urgenceText}>Urgence</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                      onPress={() => {
                        Linking.openURL(`tel:185`)
                      }}
                      style={styles.urgenceCardeItems}
                    >
                      <Image source={require('../../assets/etoile-de-la-vie.png')} style={{ width: 60, height: 60 }} />
                      <Text style={styles.urgenceText}>SAMU</Text>
                    </TouchableOpacity>

                  </View>
                </View>


                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Informations sur le vehicule</Text>

                  <View style={styles.containe}>

                  </View>
                </View>
              </View>



            </View>
          )
      }
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  containe: {

    backgroundColor: '#ecf0f1',
  },
  container: {
    flex: 1,
    position: "relative",

  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

  },
  imageContainer: {
    width: "100%",
    height: 300,
    overflow: 'hidden',
  },
  card: {
    width: "90%",
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 5,
    textTransform: "uppercase",
    width: "50%",
    textAlign: "right",
    color: "#4d4d4d"

  },
  label: {
    width: "50%",
    fontSize: 10,
    marginTop: 5,
    color: "#8a8a8a",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 15,

  },
  infosItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  urgenceCarde: {
    flex: 1,
    flexWrap: "wrap",
    marginBottom: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  urgenceCardeItems: {
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: 100,
    backgroundColor: "#6bbcff",
    borderRadius: 8,
    margin: 5,
  },
  urgenceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  shareButton: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#0a68ff",
    borderRadius: 8,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#0a68ff",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  shareButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  startTravel: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "green",
    borderRadius: 8,
    padding: 15,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "green",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  startTravelText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
})

export default ScanneResults