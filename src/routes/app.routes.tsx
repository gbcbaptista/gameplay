import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";
import { theme } from '../global/styles/theme';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';
import { Guilds } from '../screens/Guilds';
import { ModalView } from '../components/ModalView';

const { Navigator, Screen } = createStackNavigator ();

export function AppRoutes() {
  return(
    <Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: theme.colors.secondary100
      }
    }}
    >
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
      <Screen 
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
      <Screen 
        name="ModalView"
        component={ModalView}
      />
    </Navigator>

  )
}