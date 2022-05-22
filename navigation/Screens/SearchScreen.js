import * as React from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';

export default function SearchScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text>Gymbros Search Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });