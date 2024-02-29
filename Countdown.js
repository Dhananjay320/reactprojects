import React, { useState } from 'react';  
import { StyleSheet, Text, View, Button } from 'react-native';  
import { Timer } from './Timer';
import { RoundedButton } from './RoundedButton';

export const Countdown = ({ message, minutes,errarsall }) => {
  const [onpause, setispause] = useState(false);
  const [restarte, setRestarte] = useState(false); // State to trigger timer reset
  const [checkclear,setcheckclear] = useState(false);
  const handlePauseToggle = () => {
    setispause(prevState => !prevState);
  };
  const handleRestart = () => {
    setRestarte(prevState => !prevState); // Toggles restart state
  };
  const handlecleartonga = () =>{
    setcheckclear(true);
  }
  const clearallthings = () =>{
    setcheckclear(false);
    errarsall ();
  }
  return (
    <View style={{ backgroundColor: '#1ab8e0', flex: 1, paddingTop: 100 }}>
      <View style={{ alignItems: 'center' }}>
        <View style={{ backgroundColor: '#1e36ed', height: 200, width: 300,alignContent : 'center' }}>
          {/* Pass restarte state and function to Timer component */}
          <Timer minutes={minutes} pause={onpause} restarte={restarte} rerestatime={handleRestart} resetingpausetime ={handlePauseToggle} clearall = {checkclear} clearallthings = {clearallthings} />
        </View>
        <Text style={{ fontSize: 50, marginTop: 30 }}>{message}</Text>
      </View>
      {/* Pass handlePauseToggle and handleRestart functions to RoundedButton */}
      <RoundedButton size={60} setpausetime={handlePauseToggle} setrestatime={handleRestart} pause = {onpause} setclearall = {handlecleartonga} />
    </View>
  );
};
