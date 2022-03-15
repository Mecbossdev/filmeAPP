import React, { useEffect } from 'react';
import {Container, Logo, SubLogo, ImageBack } from './style';
import logo from '../../assents/logo.png';
import subLogo from '../../assents/subLogo.png';
import batman from '../../assents/batman.jpg';

const Splash = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login')
  }

  useEffect(()=>{
    setTimeout(() => {
      handleLogin();
    }, 2000);
  },[])

  return (
    <Container>
      <Logo source={logo}/>
      <SubLogo source={subLogo}/>
      <ImageBack source={batman}/>
    </Container>
  )
}

export default Splash;