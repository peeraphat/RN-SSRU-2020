import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

function Preview({ route }) {
  const title = route.params.title
  const uri = route.params.uri
  const detail = route.params.detail

  return <View style={styles.container}>
    <Image
      style={styles.previewImage}
      source={{
        uri: uri
      }}
    />
    <Text style={styles.header}>{title}</Text>
    <ScrollView>
      <Text style={styles.detail}>{detail}</Text>
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    marginTop: 10,
    fontWeight: 'bold'
  },
  detail: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  previewImage: {
    width: 250,
    height: 250
  }
})

export default Preview