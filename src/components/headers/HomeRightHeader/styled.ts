import {FLEX, FONT} from '@App/utils/css';
import {COLORS} from '@App/utils/theme';
import {Text, View} from 'react-native';
import styled from 'styled-components';

export const HeaderContainer = styled(View)`
  ${FLEX('row', 'center', 'flex-end')}
`;

export const LinkText = styled(Text)`
  font-weight: 600;
  ${FONT(22, COLORS.text.black)}
  margin-right: 15px;
`;

export const FavoriteButton = styled(View)`
  width: 30px;
  height: 30px;
  background-color: ${COLORS.favorButton};
  border-radius: 8px;
  ${FLEX('row', 'center', 'center')}
`;
