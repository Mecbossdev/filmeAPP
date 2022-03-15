import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #000;
  flex: 1 ;
  
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch'
})`
  width: 100%;
  height: 50%;
`;