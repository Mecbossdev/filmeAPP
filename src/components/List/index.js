import React from 'react';
import { ContainerItem, Image, Text } from './style';
import { FlatList } from 'react-native';

const List = ({ list, title, trending }) => {
  return (
    <>
      <Text>{title}</Text>
      <FlatList
        data={list}
        horizontal
        style={{ marginTop: 10 }}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => {
          const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`;

          return (
            <ContainerItem trending={trending}>
              <Image
                trending={trending}
                source={{ uri, }} />
            </ContainerItem>
          )
        }}
      />
    </>
  )
};

export default List;