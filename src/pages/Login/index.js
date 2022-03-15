import React from 'react';
import {
  Container,
  Logo,
  SubLogo,
  ImageBackground,
  ContainerInput,
  Input,
  Button,
  Text,
  ContainerText,
  Form
} from './style';
import logo from '../../assents/logo.png';
import subLogo from '../../assents/subLogo.png';
import login from '../../assents/login.jpg';

const Login = ({ navigation }) => {

  const handleLogin = () => {
    navigation.replace('Home')
  }

  const handleForgetPassword = () => {
    alert('ForgetPassword')
  }

  const handleCreateAccount = () => {
    alert('CreateAccount')
  }

  return (
    <ImageBackground source={login}>
      <Container>
        <Logo source={logo} />
        <SubLogo source={subLogo} />
        <Form>
          <ContainerInput>
            <Input placeholder='E-mail' placeholderTextColor='white' />
          </ContainerInput>
          <ContainerInput>
            <Input placeholder='Password' placeholderTextColor='white' />
          </ContainerInput>
          <Button onPress={handleLogin}>
            <Text>LOGIN</Text>
          </Button>
          <ContainerText>
            <Text onPress={handleForgetPassword}>Forget password?</Text>
            <Text>|</Text>
            <Text onPress={handleCreateAccount}>Create Account</Text>
          </ContainerText>
        </Form>
      </Container>

    </ImageBackground>
  )
}

export default Login;