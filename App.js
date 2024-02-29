import React from 'react';  
import { StyleSheet, Text, TextInput, View,Button} from 'react-native'; 
import {Countdown} from './Countdown.js';
export default function App ()  { 
  const [text, onChangeText] = React.useState(''); 
  const [isChecked, setisChecked] = React.useState(false);
  const [number, onChangenumber] = React.useState(0); 
  const [isChecked1, setisChecked1] = React.useState(false);
  const ischanged = () =>{
      setisChecked(true);
  };
  const ischaneno = () =>{
    setisChecked1(true);
  };
  const errarsall = () =>{
    setisChecked(false);
    setisChecked1(false);
  }
 if(!isChecked)
 { 
    return (  
      <View style = {{backgroundColor: '#1ab8e0',flex: 1,paddingTop: 250}} > 
      
        <TextInput
           onChangeText={onChangeText}
           placeholder ="Enter Your Task Heare"
           caretHidden={true}
           style={{backgroundColor :'#ffffff',fontSize:34,margin:5,borderRadius: 25,textAlign : 'center'}}
        />
        <View style = {{backgroundColor: '#1ab8e0',paddingTop: 50,margin :5}} >
        <Button
           onPress={ischanged}
           title="set this task"
           color="#841584"
          />
          </View> 
      </View>  
    ); 
  }
  if(!isChecked1)
  {
  return(
    <View style = {{backgroundColor: '#1ab8e0',flex: 1,paddingTop: 250}}>     
       <TextInput
           onChangeText={onChangenumber}
           placeholder ="Enter Time {in min}"
           style={{backgroundColor :'#ffffff',fontSize:34,textAlign : 'center',borderRadius: 25,margin:5}}
           keyboardType='number-pad'
           caretHidden={true}
        />
        <View style = {{backgroundColor: '#1ab8e0',paddingTop: 50,margin :5}} >
        <Button
           onPress={ischaneno}
           title="set time"
           color="#841584"
          />
          </View>
      </View>    
  ); 
  }
  return(
       <Countdown
         message={text}
         minutes={number}
         errarsall={errarsall}
       />
  );
} 
