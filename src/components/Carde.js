import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function Carde(children) {
    return (
        <View style={styles.cardStyle}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    }
})

export default Carde