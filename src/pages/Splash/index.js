import React, { useEffect } from 'react';
import {Container, Logo} from './style';
import space from '../../assents/space.png'


const Splash = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login')
  }

  useEffect(()=>{
    setTimeout(() => {
      handleLogin();
    }, 1500);
  },[])

  return (
    <Container>
      <Logo source={space}/>
      <SubLogo source={}/>
    </Container>
  )
}

export default Splash;