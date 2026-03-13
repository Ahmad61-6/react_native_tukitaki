import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../components/ThemedView'
import PreviewLayout from '../components/PreviewLayout'

const FlexDirection
 = () => {
  const [flexDirection, setFlexDirection] = useState('column')
  return (
    <PreviewLayout
   label="flexDirection" 
      values={['column', 'row', 'column-reverse', 'row-reverse']}
      selectedValue={flexDirection}
      setSelectedValue={setFlexDirection}
    >
      <ThemedView style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <ThemedView style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <ThemedView style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  )
}

export default FlexDirection


const styles = StyleSheet.create({
  box:{
    width:50,
    height:50
  }
})