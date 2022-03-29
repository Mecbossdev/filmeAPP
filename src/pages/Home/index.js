import React, { useEffect, useState } from 'react';
import {
  Container,
  ContainerCarousel,
  ContainerList,
} from './style';
import Carousel from './Carousel';
import List from '../../components/List/index';
import api from '../../services/api';

const apiKey = 'api_key=c2e78b4a8c14e65dd6e27504e6df95ad';
const language = 'Language=pt-BR';

const Home = () => {

  const [ListTrending, setListTrending] = useState([]);
  const lista = [0, 1, 2, 3, 6];

  const init = async () => {
    const response = await api.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=c2e78b4a8c14e65dd6e27504e6df95ad&language=en-US&page=1`
    )
    setListTrending(response.data.results);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      <ContainerCarousel>
        <Carousel list={lista} />
      </ContainerCarousel>
      <ContainerList>
        <List list={ListTrending} title="Filmes em cartaz" trending={true} />
      </ContainerList>
    
      <ContainerList>
        <List list={ListTrending} title="Filmes em cartaz"/>
       </ContainerList >
      <ContainerList>
        <List list={ListTrending} title="Filmes em cartaz" />
      </ContainerList>
      <ContainerList>
        <List list={ListTrending} title="Filmes em cartaz" />
      </ContainerList>
      
    </Container >
  );
};

export default Home;