import {FLEX, FONT} from '@App/utils/css';
import {COLORS} from '@App/utils/theme';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';

export const CardContainer = styled(TouchableOpacity)`
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: ${COLORS.thirdey};
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const ContentContainer = styled(View)`
  width: 100%;
  padding: 10px;
`;

export const ImageContainer = styled(View)`
  width: 100%;
  height: 300px;
`;

export const TitleText = styled(Text)`
  font-weight: 800;

  ${FONT(20, COLORS.text.white)}
`;

export const SubTitleText = styled(Text)`
  ${FONT(16, COLORS.text.gray)}
`;

export const StatusText = styled(Text)`
  font-weight: 500;
  ${FONT(18, COLORS.text.white)}
`;

export const CategoryView = styled(View)`
  ${FLEX('row', 'center', 'flex-start')}
`;

export const Circle = styled(View)`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  background-color: ${COLORS.red};
  border-radius: 100;
`;

export const SubDescView = styled(View)`
  margin: 16px 0;
  ${FLEX('column', 'flex-start', 'center')}
`;
