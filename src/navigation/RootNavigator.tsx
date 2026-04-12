import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../components/MainScreen/MainScreen';
import { SettingsScreen } from '../components/SettingsScreen/SettingsScreen';
import { Colors } from '../theme/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type RootStackParamList = {
  Main: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Colors.background,
          paddingTop: insets.top,
        },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Main" component={MainScreen} />

      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
