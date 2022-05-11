import react, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text, ScrollView } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_KEY } from '../constants/constants';



const MapTrack = () => {


    const [destination, setDestination] = useState({
        latitude: 0,
        longitude: 0,
    })

    const [origin, setOrigin] = useState({
        latitude: 5.432887099999999,
        longitude: -4.0388918,
    })

    const [coordinates, setCoordinates] = useState([
        {
            latitude: 5.3724128,
            longitude: -4.007881,
        },
        {
            latitude: 5.3022193,
            longitude: -3.9756516,
        },
    ]);


    const ref = useRef();

    useEffect(() => {
        ref.current?.setAddressText('Some Text');
    }, []);


    return (
        <View style={styles.maincontainer}>
            {/** destination form */}

            <MapView
                style={styles.maps}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.0622,
                    longitudeDelta: 0.0121,
                }}>

                <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={API_KEY}
                    strokeWidth={6}
                    strokeColor="orangered"
                    mode='DRIVING'
                    onReady={result => {
                        // console.log(`Distance: ${result.distance} km`)
                        // console.log(`Duration: ${result.duration} min.`)
                        setCoordinates([
                            ...coordinates,
                            {
                                latitude: result.coordinates[result.coordinates.length - 1].latitude,
                                longitude: result.coordinates[result.coordinates.length - 1].longitude,
                            },

                        ])
                    }}

                />
                {/**custom marker */}
                <Marker
                    coordinate={origin}
                    title="Origin"
                    description="Origin"

                >
                    <View style={styles.markerCircle}>
                        <Text style={styles.markerText}></Text>
                    </View>
                </Marker>
                <Marker
                    coordinate={destination}
                    title="Destination"
                    description="Destination"
                >
                    <View style={styles.markerSquare}>
                        <Text style={styles.markerText}></Text>
                    </View>
                </Marker>

            </MapView>
            {/*buttons conatiner*/}
            <View
                style={{
                    alignItems: "center",
                    alignSelf: 'center',
                    backgroundColor: '#fff',
                    position: 'absolute',
                    bottom: 0,
                    width: "100%",
                    height: 300,
                    borderTopEndRadius: 30,
                    borderTopStartRadius: 30,
                }}
            >
                <View style={styles.buttonContainer}>
                    <View style={styles.tragerForm}>
                    <GooglePlacesAutocomplete
                        placeholder='Destination'
                        minLength={2}
                        autoFocus={false}
                        returnKeyType={'search'}
                        listViewDisplayed='auto'
                        fetchDetails={true}
                        renderDescription={row => row.description}
                        onPress={(data, details = null) => {
                            setDestination({
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng,
                            })

                            console.log(details)
                        }}
                        getDefaultValue={() => ''}
                        query={{
                            key: API_KEY,
                            language: 'fr',
                        }}
                        styles={{
                            textInputContainer: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                margin: 10,
                            },
                            textInput: {
                                marginLeft: 0,
                                marginRight: 0,
                                height: 48,
                                color: '#5d5d5d',
                                fontSize: 16,
                                borderColor: '#5d5d5d',
                                borderWidth: 1,
                            },
                            predefinedPlacesDescription: {
                                color: '#1faadb'
                            },
                            listView: {
                                backgroundColor: '#ffffff',
                                borderRadius: 5,
                                marginBottom: 5,
                                marginTop: 5,
                                marginLeft: 5,
                                marginRight: 5,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.8,
                                shadowRadius: 2,
                                elevation: 1,
                            },
                            container: {
                                width: '100%',
                            },
                            poweredContainer: {
                                display: 'none',
                            },

                        }}

                        GooglePlacesDetailsQuery={{
                            fields: 'geometry',
                        }}
                        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                        debounce={200}
                    />

                    <GooglePlacesAutocomplete
                        placeholder='Origin'
                        minLength={2}
                        autoFocus={false}
                        returnKeyType={'search'}
                        listViewDisplayed='auto'
                        fetchDetails={true}
                        renderDescription={row => row.description}
                        onPress={(data, details = null) => {
                            setOrigin({
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng,
                            })

                            console.log(details)
                        }}
                        getDefaultValue={() => ''}
                        query={{
                            key: API_KEY,
                            language: 'fr',
                        }}
                        styles={{
                            textInputContainer: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                margin: 10,
                            },
                            textInput: {
                                marginLeft: 0,
                                marginRight: 0,
                                height: 48,
                                color: '#5d5d5d',
                                fontSize: 16,
                                borderColor: '#5d5d5d',
                                borderWidth: 1,

                            },
                            predefinedPlacesDescription: {
                                color: '#1faadb'

                            },
                            listView: {
                                backgroundColor: '#ffffff',
                                borderRadius: 5,
                                marginBottom: 5,
                                marginTop: 5,
                                marginLeft: 5,
                                marginRight: 5,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.8,
                                shadowRadius: 2,
                                elevation: 1,
                            },
                            container: {
                                width: '100%',
                            },
                            poweredContainer: {
                                display: 'none',
                            },


                        }}

                        GooglePlacesDetailsQuery={{
                            fields: 'geometry',
                        }}
                        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
                        debounce={200}
                    />
                    </View>
                </View>

            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        position: 'relative',
    },
    maps: {
        flex: 1,
    },
    buttonContainer: {
        alignItems: 'center',
        flexDirection: "row"
    },
    button: {
        backgroundColor: '#000',
        padding: 10,
        height: 50,
        borderRadius: 50,
        width: 100,
        margin: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        color: "#fff"
    },
    marker: {
        backgroundColor: 'orangered',
        padding: 5,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'red',
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    markerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    markerSquare: {
        backgroundColor: '#000',
        padding: 5,
        borderWidth: 1,
        borderColor: 'red',
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    markerTextSquare: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    markerCircle: {
        backgroundColor: '#000',
        padding: 5,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'red',
        width: 20,
        height: 20,
        alignItems: 'center',

    },
    addressContainer: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'red',
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },



})

export default MapTrack