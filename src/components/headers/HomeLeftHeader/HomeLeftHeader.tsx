import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import Profile from '@App/assets/icons/profile.svg';
import {COLORS} from '@App/utils/theme';

export const HomeLeftHeader: FC = ({}) => {
  return (
    <TouchableOpacity>
      <Profile fill={COLORS.black} width={35} height={35} />
    </TouchableOpacity>
  );
};
