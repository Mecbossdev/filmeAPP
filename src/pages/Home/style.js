import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const Container = styled.View`
  background-color: #000;
  flex: 1 ;
  
`;

export const ContainerCarousel = styled.View`
  height: 50%;
`;