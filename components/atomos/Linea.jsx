import styled from "styled-components/native";
import { View, Text } from "react-native";

// 1. La línea horizontal (equivalente al div principal)
export const Linea = styled.View`
  background-color: ${({ theme }) => theme.color2};
  height: 2px;
  border-radius: 2px;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// 2. El texto flotante (equivalente al span)
export const LineaTexto = styled.Text`
  position: absolute;
  background-color: ${({ theme }) => theme.bgtotal};
  padding: 0 5px;
  color: ${({ theme }) => theme.color2};
  font-weight: 700;
  font-size: 14px;
`;