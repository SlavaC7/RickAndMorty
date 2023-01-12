import {CardItem} from '@App/components/CardItem/CardItem';
import {useGetApiQuery} from '@App/store/api';
import React, {FC, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {BannerContainer, BannerText, DataContainer, Wrapper} from './styled';

const Home: FC = ({}) => {
  const {data} = useGetApiQuery();

  return (
    <Wrapper bounces={false} showsVerticalScrollIndicator={false}>
      <BannerContainer>
        <BannerText>The Rick and Morty Api </BannerText>
      </BannerContainer>
      <DataContainer>
        <FlatList
          data={data?.results}
          style={{paddingHorizontal: 30, marginTop: 20}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return <CardItem {...item} />;
          }}
          ListEmptyComponent={() => <Text>is Empty</Text>}
        />
      </DataContainer>
    </Wrapper>
  );
};

export default Home;
