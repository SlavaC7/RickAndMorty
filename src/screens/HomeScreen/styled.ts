import {FLEX, FONT} from '@App/utils/css';
import {COLORS} from '@App/utils/theme';
import {ScrollView, Text, View} from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(ScrollView)`
  background-color: ${COLORS.white};
  width: 100%;
  height: 100%;
`;

export const BannerContainer = styled(View)`
  width: 100%;
  height: 300px;
  ${FLEX('row', 'center', 'center')}
`;

export const BannerText = styled(Text)`
  font-weight: 900;
  text-align: center;
  ${FONT(50, COLORS.text.black)}
`;

export const DataContainer = styled(View)`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.secondary};
`;
