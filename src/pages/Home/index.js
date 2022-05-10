import React, { useEffect, useState } from 'react';
import { Container, ContainerCarousel, ContainerList } from './style';
import Carousel from './Carousel';
import List from '../../components/List';
import { 
  GetFilmsNowPlaying, 
  GetFilmsTrending, 
  GetGenders } 
from '../../services/filmsAPI';

const Home = () => {

  const [ListTrending, setListTrending] = useState([]);
  const [ListFilmNow, setListFilm] = useState([]);
  const [genders, setGenders] = useState([]);

  const getFilmsTrending = async (page) => {
    const response = await GetFilmsTrending(1);
    setListTrending(response.data.results)
    .catch(error => console.log(e));
  };

  const getFilmsNowPlay = async (page) => {
    const response = await GetFilmsNowPlaying(1);
    setListFilm(response.data.results)
    .catch(error => console.log(e));
  };

  const getFilmsByGenders = async () => {
    const response = await GetGenders();
    setGenders(response.data.genres)
    .catch(error => console.log(e));
  };

  useEffect(() => {
    getFilmsTrending();
  }, []);

  useEffect(() => {
    getFilmsNowPlay();
  }, []);

  useEffect(() => {
    getFilmsByGenders();
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
        genders.map(item => {
          const title = `Filmes de ${item.name}`;
          return (
            <ContainerList key={`${item.id}`}>
              <List
                list={ListTrending}
                title={title}
              />
            </ContainerList>
          )
        })
      }
    </Container >
  );
};

export default Home;