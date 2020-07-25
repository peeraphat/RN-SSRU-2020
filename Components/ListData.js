import React from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import fakeData from './../fakeData'

function ListData({ navigation }) {
  console.log('fakeData', fakeData)
  return <SafeAreaView style={styles.container}>
    <FlatList 
      data={fakeData}
      renderItem={(data) => {
        return <TouchableOpacity onPress={() => navigation.navigate('Preview', {
          title: data.item.title,
          uri: data.item.uri,
          detail: data.item.detail
        })}>
          <View>
            <Text style={styles.item}>{data.item.title}</Text>
          </View>
        </TouchableOpacity>
      }}
      keyExtractor={(data => data.title)}
    />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 25,
    height: 44,
    textAlign: 'center'
  }
})

export default ListData