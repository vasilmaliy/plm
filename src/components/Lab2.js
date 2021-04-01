import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CoordinateVM from '../components/CoordinateVM';

const Lab2 = () => {
    return (
        <View style={styles.generalContainer}>
            <Text style={styles.personalInformation}>
                <CoordinateVM dir='latitute' deg={80} min={56} sec={56}/>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    generalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    personalInformation: {
        textAlign: 'center',
    }
})

export default Lab2