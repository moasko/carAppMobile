import { View, Text,Touchable,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';


  {/**custom mobile header */}
const CustomHeader = ({navigation}) => {
  return (
    <View style={styles.header}>
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.headerButton}
        >
        <Icon name="share" style={{ marginRight: 20 }} size={20} color="#000" />

        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    headerButton: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height:40,
        width:40,
        borderRadius:50,

    },
    headerButtonText: {
        fontSize: 16,
        color: '#fff',
    },
    headerTitle: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
})

export default CustomHeader