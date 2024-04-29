import React, { useRef, useState, useEffect } from 'react';  
import { Text, View } from 'react-native';  
export const Timer = ({ minutes, pause, restarte, rerestatime, resetingpausetime, clearall, clearallthings,setsountalertscreen }) => {
    const interval = useRef(null);
    const [seconds, setSeconds] = useState(minutes * 60);
    
    const countDown = () => {
        setSeconds((time) => {
            if (time === 0) {
                clearInterval(interval.current);
                return 0;
            }
            const timeLeft = time - 1;
            return timeLeft;
        });
    };
    useEffect(() => {
        if(clearall)
        {                
         clearInterval(interval.current);
         clearallthings();
        }
    }, [clearall]);

    useEffect(() => {
        if (restarte) {
            setSeconds(minutes * 60); // Reset timer
            rerestatime(); // Call the function to toggle resta state
        }
    }, [restarte, rerestatime]);

    useEffect(() => {
        if (pause) {
            clearInterval(interval.current);
        } else {
            interval.current = setInterval(countDown, 1000);
        }

        return () => clearInterval(interval.current);
    }, [pause]);
    useEffect(() => {
        if(seconds === 0)
        { 
          setsountalertscreen();        
          rerestatime();
          resetingpausetime();
        }
    }, [seconds]);

    return (
        <View style = {{alignItems : 'center'}}>
            <Text
                style={{
                    fontSize: 75,
                    textAlign: 'center',
                    borderRadius: 25,
                    margin: 50,
                }}>
                {`${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`}
            </Text>
        </View>
    );
};
