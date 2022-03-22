import styled from 'styled-components/native';

export const ContainerList = styled.View`
  margin-left: 10px;
  margin-top: 10px;
`;

export const ContainerItem = styled.View`
  height: 100px;
  width: 70px;
  background-color: red;
  margin: 10px;
  border-radius: 5px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  height: 100%;
  width: 100%; 
`;

export const Text = styled.Text`
  color: white;
  font-size: 15px;
`;