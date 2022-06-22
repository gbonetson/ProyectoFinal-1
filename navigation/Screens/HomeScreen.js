import * as React from 'react';
import { useEffect, useState } from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import firebase from '../../database/firebase'
import firestore from '@react-native-firebase/firestore';
import { doc, QuerySnapshot } from 'firebase/firestore';



const usersCollection = firebase.db.collection('Usuarios');
/*const cards = [
    {
        id: usersCollection.doc('1BgihrESZwfabm5zpK19').id,
        title: usersCollection.doc('1BgihrESZwfabm5zpK19').Nombre,
        picture: {uri: usersCollection.doc('1BgihrESZwfabm5zpK19').FotoPerfil},
        content: <Text>{usersCollection.doc('1BgihrESZwfabm5zpK19').Gustos}</Text>
    },
    {
        id: usersCollection.doc('HhxPXKhuVNxWkeC6x0BH').id,
        title: usersCollection.doc('HhxPXKhuVNxWkeC6x0BH').Nombre,
        picture: {uri: usersCollection.doc('HhxPXKhuVNxWkeC6x0BH').FotoPerfil},
        content: <Text>{usersCollection.doc('HhxPXKhuVNxWkeC6x0BH').Gustos}</Text>
    },
    {
        id: usersCollection.doc('K9KOk8CjeYNDkoeaLgea').id,
        title: usersCollection.doc('K9KOk8CjeYNDkoeaLgea').Nombre,
        picture: {uri: usersCollection.doc('K9KOk8CjeYNDkoeaLgea').FotoPerfil},
        content: <Text>{usersCollection.doc('K9KOk8CjeYNDkoeaLgea').Gustos}</Text>
    },
    {
        id: usersCollection.doc('T5PtMSBQh3aAY0bLacBH').id,
        title: usersCollection.doc('T5PtMSBQh3aAY0bLacBH').Nombre,
        picture: {uri: usersCollection.doc('T5PtMSBQh3aAY0bLacBH').FotoPerfil},
        content: <Text>{usersCollection.doc('T5PtMSBQh3aAY0bLacBH').Gustos}</Text>
    },
    {
        id: usersCollection.doc('nCU7K4lhuJzn9LHy4K78').id,
        title: usersCollection.doc('nCU7K4lhuJzn9LHy4K78').Nombre,
        picture: {uri: usersCollection.doc('nCU7K4lhuJzn9LHy4K78').FotoPerfil},
        content: <Text>{usersCollection.doc('nCU7K4lhuJzn9LHy4K78').Gustos}</Text>
    },
    {
        id: usersCollection.doc('xSi8FKkyI8Aro0vcyScx').id,
        title: usersCollection.doc('xSi8FKkyI8Aro0vcyScx').Nombre,
        picture: {uri: usersCollection.doc('xSi8FKkyI8Aro0vcyScx').FotoPerfil},
        content: <Text>{usersCollection.doc('xSi8FKkyI8Aro0vcyScx').Gustos}</Text>
    },
  ]*/
  //var nombreTest=firebase.db.collection("Usuarios").doc('1BgihrESZwfabm5zpK19').Nombre;
  
  export default function HomeScreen({navigation}) {
    // const [users, setUsers] = useState([]);
    
    // useEffect(()=>{
    //     firebase.db.collection("Usuarios").onSnapshot(querySnapshot =>{
    //         querySnapshot.docs.forEach(doc =>{
    //             console.log(doc.data)
    //         })
    //     })
    // },[])
    //console.log(nombreTest)
    return (
            <View style={styles.container}>
                <Text>test</Text>
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