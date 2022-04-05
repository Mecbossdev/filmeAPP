import React, { useEffect, useState } from 'react';
import {
  Container,
  ContainerCarousel,
  ContainerList,
} from './style';
import Carousel from './Carousel';
import List from '../../components/List/index';
import api from '../../services/api';
import { GetFilmsNowPlaying, GetTrendingFilms, GetGenders } from '../../services/filmsAPI';

const Home = () => {

  const [ListTrending, setListTrending] = useState([]);
  const [ListFilmNow, setListFilmNow] = useState([]);
  const [genders, setGenders] = useState([]);

  const getFilmsTrending = async () => {
    const response = await GetTrendingFilms(1);
    setListTrending(response.data.results);
  };

  const getFilmsPlayingNow = async () => {
    const response = await GetFilmsNowPlaying(1);
    setListFilmNow(response.data.results);
  };

  const getGenders = async () => {
    const response = await GetGenders();
    setGenders(response.data.genres);
  };

  useEffect(() => {
    getFilmsTrending();
  }, []);

  useEffect(() => {
    getFilmsPlayingNow();
  }, []);

  useEffect(() => {
    getGenders();
  }, []);

  return (
    <Container>
      <ContainerCarousel>
        <Carousel list={ListTrending} />
      </ContainerCarousel>
      <ContainerList>
        <List
          list={ListFilmNow}
          title="Filmes Assistidos agora"
          trending={true}
        />
      </ContainerList>

      {
        genders.map((item) => {
          const title = `Filmes ${item.name}`;
          return (
            <ContainerList
              key={`${item.id}`}>
              <List
                list={ListTrending}
                title={title} />
            </ContainerList >
          );
        })
      }
    </Container >
  );
};

export default Home;