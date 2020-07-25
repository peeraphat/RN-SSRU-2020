import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'

function User() {
  return <View style={styles.container}>
      <Image source={require('./../assets/user.png')} />
      <View style={{ paddingTop: 10, alignItems: 'center'}}>
        <Text style={styles.name}>Peeraphat Thongfueng</Text>
        <Text style={styles.bio}>I'm Developer</Text>
      </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 22,
    backgroundColor: '#fff'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  bio: {
    fontSize: 18
  }
})

export default User