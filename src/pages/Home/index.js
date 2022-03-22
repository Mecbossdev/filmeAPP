import React from 'react';
import {
  Container,
  ContainerCarousel,
  ContainerItem,
  ContainerList,
  Image,
  Text,  
} from './style';

import Carousel from './Carousel';
import { FlatList } from 'react-native';
import List from '../../components/List';

const Home = () => {
  const lista = [0, 1, 2, 3, 6];

  return (
    <Container>
      <ContainerCarousel>
        <Carousel list={lista}/>
      </ContainerCarousel>
      <ContainerList>
        <List />
      </ContainerList>
    </Container>
  );
};

export default Home;