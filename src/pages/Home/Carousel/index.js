import React from 'react';
import { FlatList } from 'react-native';
import {
  Image,
  Icon,
  ButtonWatch,
  Text,
  Gradient,
  Item,
} from './style';

const Carousel = ({ list }) => {
  return (

    <FlatList
      data={list}
      horizontal
      pagingEnabled
      keyExtractor={(item, index) => `${item}_${index}`}
      renderItem={({ item }) => {
        const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`;

        return (
          <Item>
            <Image
              source={{
                uri,
              }} />
            <Gradient
              colors={["transparent", "rgba(0,0,0,0.9)", "rgba(0,0,0, 1)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <Icon
                name="share"
                size={30}
                color="white"
              />
              <ButtonWatch>
                <Icon
                  name="controller-play"
                  size={20} color="black"
                  style={{ marginRight: 5 }}
                />
                <Text>Assistir</Text>
              </ButtonWatch>
              <Icon
                name="info-with-circle"
                size={30}
                color="white"
              />
            </Gradient>

          </Item >
        );
      }}
    />
  );
}

export default Carousel;