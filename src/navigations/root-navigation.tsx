import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TRootNav, TRootNavEnum} from './config';

import * as Screens from '@App/screens/index';
import {HomeLeftHeader} from '@App/components/headers/HomeLeftHeader/HomeLeftHeader';
import {HomeRightHeader} from '@App/components/headers/HomeRightHeader/HomeRightHeader';

const RootNavigationSkeleton = createNativeStackNavigator<TRootNav>();

export const RootNavigator = () => {
  return (
    <RootNavigationSkeleton.Navigator
      screenOptions={{
        headerTitle: '',
      }}>
      <RootNavigationSkeleton.Screen
        component={Screens.Home}
        name={TRootNavEnum.HomeScreen}
        options={{
          headerLeft: () => <HomeLeftHeader />,
          headerRight: () => <HomeRightHeader />,
        }}
      />
    </RootNavigationSkeleton.Navigator>
  );
};
