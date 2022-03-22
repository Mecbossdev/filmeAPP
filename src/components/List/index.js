import React from 'react';
import { ContainerList, ContainerItem, Image, Text } from './style';

const List = () => {
  return (
    <>
      <Text>Filmes de Ação</Text>
      <FlatList
        horizontal
        data={lista}
        style={{ marginTop: 10 }}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item }) => {
          return (
            <ContainerItem>
              <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg' }} />
            </ContainerItem>
          )
        }}
      />
    </>
  )
}