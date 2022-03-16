import React from 'react';
import {
  Container,
  ContainerCarousel,
} from './style';

import Carousel from './Carousel';

const Home = () => {
  const lista = [0, 1, 2, 3, 6];
  
  return (
    <Container>
      <ContainerCarousel>
        <Carousel list={lista}/>
      </ContainerCarousel>
    </Container>
  )
};

export default Home;