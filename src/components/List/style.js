import styled from 'styled-components/native';

export const ContainerList = styled.View`
  margin-left: 10px;
  margin-top: 10px;
`;

export const ContainerItem = styled.View`
  height: 110px;
  width: ${(props) => (props.trending ? 110 : 90)}px;
  margin: 10px;
  
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  height: 100%;
  width: 100%;
  border-radius: ${(props) => (props.trending ? 90 : 8)}px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 15px;
`;