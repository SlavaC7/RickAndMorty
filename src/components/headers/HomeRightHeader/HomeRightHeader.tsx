import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {FavoriteButton, HeaderContainer, LinkText} from './styled';

import FavoriteIcon from '@App/assets/icons/favorite.svg';
import {COLORS} from '@App/utils/theme';

export const HomeRightHeader: FC = ({}) => {
  return (
    <HeaderContainer>
      <TouchableOpacity>
        <LinkText>Docs</LinkText>
      </TouchableOpacity>

      <TouchableOpacity>
        <LinkText>About</LinkText>
      </TouchableOpacity>

      <FavoriteButton>
        <FavoriteIcon fill={COLORS.white} />
      </FavoriteButton>
    </HeaderContainer>
  );
};
