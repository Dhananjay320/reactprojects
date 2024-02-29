import React from 'react';
import { TouchableOpacity, TextSheet,View,Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export const RoundedButton = ({
  size = 125,
  setpausetime,
  setrestatime,
  pause,
  setclearall
}) => {
    return (
      <View>
      <View style={{ margin: 5, flexDirection: 'row' }} >
        <TouchableOpacity style={[styles(size).radius]} onPress ={setrestatime} >
          <MaterialCommunityIcons name="restart" size={50} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles(size).radius]} onPress ={setpausetime} >
          <AntDesign name={pause ? "caretright" : "pause"} size={47} color="black" />
        </TouchableOpacity>
      </View>
      <View style = {{alignItems :'center',paddingTop :50}} >
      <TouchableOpacity style={[styles(size).clear]}  onPress = {setclearall} >
        <Text style={{fontSize:40,textAlign : 'center',borderRadius: 25}}>CLEAR</Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  };

const styles = (size) => ({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: "center",
      backgroundColor: '#1616e5',
      borderWidth: 2,
      marginLeft:75
    },
    clear: {
      borderRadius: 25,
      width: size*5,
      height: size,
      alignItems: 'center',
      justifyContent: "center",
      backgroundColor: '#1616e5',
      borderWidth: 2,
      alignItems : 'center'
    }
  }); 