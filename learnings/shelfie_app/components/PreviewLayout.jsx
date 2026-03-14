import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ThemedText from './ThemedText'
import ThemedView from './ThemedView'

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
}) => {
  return (
    <ThemedView style = {{
        padding:10,
        flex:1,
    }}>
        <ThemedView style={styles.row}>
            {values.map(value =>
                (
                    <TouchableOpacity
                    key={value}
                    onPress={()=>setSelectedValue(value) }
                    style = {[styles.button, value === selectedValue && styles.selected]}
                    >
                      <ThemedText
                      style = {[styles.buttonLabel, value === selectedValue && styles.selectedLebel]}
                      >{value}</ThemedText>
                    </TouchableOpacity>
                )
            )}
        </ThemedView>
        <ThemedView style={[styles.container, {[label]:selectedValue}]}>
            {children}
        </ThemedView>


    </ThemedView>
  )
}

export default PreviewLayout

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        backgroundColor: 'aliceblue'
    },
    // lebel: {
    //     fontWeight:'bold',
    //     fontSize:24,
    //     textAlign:'center',
    //     marginBottom:10,
    // },
    row:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected:{
    backgroundColor: 'coral',
    borderWidth: 0,
  },
   buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLebel:{
    color:'white'
  }
})