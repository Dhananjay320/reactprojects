import React,{useState,useRef,useEffect} from 'react';  
import { StyleSheet, Text, TextInput, View,Button} from 'react-native'; 
import {emojiFromUtf16} from "rn-emoji-picker"
import {Countdown} from './Countdown.js';
import {AccountBackground} from './background.js'
import ConfettiCannon from 'react-native-confetti-cannon';
import { Audio } from 'expo-av';
export default function App ()  { 
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const interval = useRef(null);
  const [text, onChangeText] = useState(''); 
  const [isChecked, setisChecked] = useState(false);
  const [number, onChangenumber] = useState(0); 
  const [isChecked1, setisChecked1] = useState(false);
  const [isChecked2,setisChecked2]  = useState(false);
  const [isChecked3,setisChecked3]  = useState(false);
  async function playSound() {
    if (isChecked2) {
      console.log('Stopping Sound');
      await sound.stopAsync(); // Stop the sound if it's already playing
      setIsPlaying(false); // Update the state
    } else {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
        require('./assets/Hello.mp3')
      );
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
      setIsPlaying(true); // Update the state
    }
  }
  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);


  handleSomeKindOfEvent = () => {
    this.explosion && this.explosion.start();
  };
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
  const countDown = () => {
    handleSomeKindOfEvent();
  }
  const handleisChecked2 = () =>{
    setisChecked2(prevState => !prevState)
    playSound();
    interval.current = setInterval(countDown, 5000);

  }
  const goagaintocountdown = () =>{
    setisChecked2(prevState => !prevState)
    setisChecked3(prevState => !prevState)
    playSound();
    clearInterval(interval.current);
  } 
 if(!isChecked)
 { 
    return (
      <AccountBackground>  
      <View style = {{flex: 1,paddingTop: 250}} > 
      
        <TextInput
           onChangeText={onChangeText}
           placeholder ="Enter Your Task Heare"
           caretHidden={true}
           style={{backgroundColor :'#ffffff',fontSize:34,margin:5,borderRadius: 25,textAlign : 'center'}}
        />
        <View style = {{paddingTop: 50,margin :5}} >
        <Button
           onPress={ischanged}
           title="set this task"
           color="#841584"
          />
          </View> 
      </View> 
      </AccountBackground> 
    ); 
  }
  if(!isChecked1)
  {
  return(
    <AccountBackground>
    <View style = {{flex: 1,paddingTop: 250}}>     
       <TextInput
           onChangeText={onChangenumber}
           placeholder ="Enter Time {in min}"
           style={{backgroundColor :'#ffffff',fontSize:34,textAlign : 'center',borderRadius: 25,margin:5,width :350}}
           keyboardType='number-pad'
           caretHidden={true}
        />
        <View style = {{paddingTop: 50,margin :5}} >
        <Button
           onPress={ischaneno}
           title="set time"
           color="#841584"
          />
          </View>
      </View> 
      </AccountBackground>   
  ); 
  }
  if(isChecked2)
  {
    return(
      <View style={{flex:1,backgroundColor:'#7c007c',paddingTop:300 }}>
      <ConfettiCannon
        count={200}
        origin={{x: -10, y: 0}}
        autoStart={true}
        ref={ref => (this.explosion = ref)}
      />
      <Text style={{fontSize:34,textAlign : 'center',borderRadius: 25,margin:10,width :350}}>congratulations you have successfully  completed the task{emojiFromUtf16('1F389')}</Text>
     <Button
       onPress={goagaintocountdown}
       title="Dismiss"
        color="#0081f1"
       />
    </View>
    );
  }
  return(
    <AccountBackground>
       <Countdown
         message={text}
         minutes={number}
         errarsall={errarsall}
         changescreen={handleisChecked2}
         checked3={isChecked3}
       />
       </AccountBackground>
  );
} 
