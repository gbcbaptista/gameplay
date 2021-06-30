import React from 'react';
import { StatusBar } from "react-native";
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Routes } from './src/routes';
import AppLoading from 'expo-app-loading';
import { Background } from './src/components/Background';
import { AuthContext } from './src/context/auth';



const App = () => {
  const [fontsLoaded] =useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded){
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      <AuthContext.Provider value={{
        name: 'Gabriel',
        email: 'gabriel@email.com',
        avatar: 'image.png'
      }}>
        <Routes />
      </AuthContext.Provider>
    </Background>
  )
}

export default App;
