import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
        <AddNewPost navigation={navigation} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})


export default NewPostScreen