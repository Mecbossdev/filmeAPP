import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #000;
  flex: 1 ;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'stretch'
})`
  width: 50%;
  height: 30%;
`;

export const SubLogo = styled.Image.attrs({
  resizeMode: 'stretch'
})`
  width: 50%;
  height: 30%;
`;