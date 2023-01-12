import React, {FC} from 'react';
import {Image} from 'react-native';
import {
  CardContainer,
  CategoryView,
  Circle,
  ContentContainer,
  ImageContainer,
  StatusText,
  SubDescView,
  SubTitleText,
  TitleText,
} from './styled';
import {TCardItem} from './types';

export const CardItem: FC<TCardItem> = ({
  image,
  name,
  species,
  status,
  location,
  origin,
}) => {
  return (
    <CardContainer activeOpacity={0.7}>
      <ImageContainer>
        <Image source={{uri: image}} style={{flex: 1}} />
      </ImageContainer>

      <ContentContainer>
        <TitleText>{name}</TitleText>

        <CategoryView>
          <Circle />
          <StatusText>
            {status}-{species}
          </StatusText>
        </CategoryView>

        <SubDescView>
          <SubTitleText>Last know location:</SubTitleText>

          <StatusText>{location.name}</StatusText>
        </SubDescView>

        <SubDescView>
          <SubTitleText>First seen in:</SubTitleText>

          <StatusText>{origin.name}</StatusText>
        </SubDescView>
      </ContentContainer>
    </CardContainer>
  );
};
