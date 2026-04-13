import styled from "styled-components/native";
import { View, Text, Image } from "react-native";
import { v } from "../../styles/variables";
import { Title } from "../atomos/Titles";
import { Linea } from "../atomos/Linea";
import { Btn1 } from "../moleculas/Btn1";
import { Footer } from "../organismos/Footer";
import { Lottieanimation } from "../atomos/LottieAnimation";
import dent from "../../assets/images/Maps Ciudad Inteligente.json";
import { useAuthStore } from "../../store/AuthStore";
export const LoginTemplate = () => {
  const { loginGoogle, logoutGoogle } = useAuthStore();
  return (
    <Container>
      <Card>
        <Card2>
          <ContentLogo>
            <LogoImage source={v.logo} resizeMode="contain" />
            <VersionText>Smart-City</VersionText>
          </ContentLogo>
        </Card2>
        <Title $paddingBottom={20}>Iniciar sesión</Title>
        <Lottieanimation
          animacion={dent}
          alto={220}
          ancho={220}
        ></Lottieanimation>
        <Linea>
          <Text>0</Text>
        </Linea>
        <Btn1
          border="2px"
          titulo="Google"
          color="#fff"
          icono={v.iconogoogle.name}
          iconoPack={v.iconogoogle.pack}
          funcion={loginGoogle}
        />
        <Btn1
          border="2px"
          titulo="salir"
          color="#fff"
          icono={v.iconogoogle.name}
          iconoPack={v.iconogoogle.pack}
          funcion={logoutGoogle}
        />
      </Card>
      <Footer></Footer>
    </Container>
  );
};

// Estilos adaptados
const Container = styled.View`
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.bg};
`;
const Card2 = styled.View`
  position: absolute;
  top: -230px;
`;
const Card = styled.View`
  width: 100%;
  max-width: 400px;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const ContentLogo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const LogoImage = styled.Image`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

const VersionText = styled.Text`
  font-weight: 700;
  font-size: 45px;
  color: ${({ theme }) => theme.text};
`;
