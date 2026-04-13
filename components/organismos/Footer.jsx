import styled from "styled-components/native";
import { View, Text } from "react-native";
// IMPORTANTE: Cambiamos react-icons por @expo/vector-icons
import { Ionicons } from "@expo/vector-icons"; 

export function Footer() {
  return (
    <Container>
      <LockContainer>
        <Ionicons name="lock-closed" size={14} color="#91a4b7" />
        <TextoLock>
          Esta es una página segura de SoftCreate. Si tienes dudas sobre la
          autenticidad del sistema, comunícate con nuestro equipo de soporte a
          través de nuestros medios digitales.
        </TextoLock>
      </LockContainer>

      <DerechosContainer>
        <TextoDerechos>Smart-City</TextoDerechos>
        <TextoDerechos>Ing: Johan Camilo Calderón Álvarez</TextoDerechos>
        <TextoDerechos>© 2026 Todos los derechos reservados</TextoDerechos>
      </DerechosContainer>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: column;
  position: absolute;
  bottom: 50px;
  margin: 10px;
  gap: 5px;
  width: 430px;
  padding: 0px 30px;
`;

const LockContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(145, 164, 183, 0.3);
  padding-bottom: 5px;
`;

const DerechosContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Separador = styled.View`
  width: 1px;
  height: 15px; 
  background-color: rgba(145, 164, 183, 0.3);
`;

const TextoLock = styled.Text`
  font-size: 12.2px;
  color: #91a4b7;
  flex: 1; /* Permite que el texto ocupe el espacio restante */
`;

const TextoDerechos = styled.Text`
  font-size: 12.2px;
  color: #91a4b7;
`;