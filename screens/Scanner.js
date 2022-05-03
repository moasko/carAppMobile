import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, StatusBar,Image } from 'react-native';
import { Camera } from 'expo-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';


function Scanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [scanned, setScanned] = useState(false);


  const isFocused = useIsFocused();

  //camera distortion solved
  const dimensions = useRef(Dimensions.get("window"));
  const screenWidth = dimensions.current.width;
  const height = Math.round((screenWidth * 16) / 9);

  const handleBarCodeScanned = ({ type, data }) => {
    if(data.length!=36){
      navigation.navigate('InvalidQr');
      return;
    }else{
       setScanned(true);
    navigation.navigate('ScanneResults', { data: data });
    }
   
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
    {isFocused ?
    (
      <Camera
        ratio='16:9'
        style={{
          flex: 1,
          height: height,
          width: "100%",
          position: "relative",
        }}
        flashMode={flash}
        type={Camera.Constants.Type.back}

        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      >

        <View style={styles.camraContent}>
          <View style={{
            justifyContent: "center",
            alignItems: "center",
            height: "90%",
          }}>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setFlash(
                flash === Camera.Constants.FlashMode.torch
                  ? Camera.Constants.FlashMode.off
                  : Camera.Constants.FlashMode.torch
              );
            }}>
              
            <Icon name={flash === Camera.Constants.FlashMode.torch ? "flash-outline" : "flash-off-outline"} size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/qrcc.png')} style={{flex:1, position:"absolute", width: "100%", height: "100%"}}/>
      </Camera>
    ) : null}
      <StatusBar backgroundColor={'#000000'} barStyle={'light-content'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },

  button: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  camraContent: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});


export default Scanner;