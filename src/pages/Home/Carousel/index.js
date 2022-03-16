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
      data={[0, 1, 2, 3, 6]}
      horizontal
      pagingEnabled
      keyExtractor={(item, index) => `${item}_${index}`}
      renderItem={({ item }) => {
        return (
          <Item>
            <Image
              source={{
                uri:
                  'https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg'
              }} />
            <Gradient
              colors={["transparent", "rgba(0,0,0,0.9)", "rgba(0,0,0, 1)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            />
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
  )
}

export default Carousel;