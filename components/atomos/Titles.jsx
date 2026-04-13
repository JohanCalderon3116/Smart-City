import styled from "styled-components/native";
import { Text } from "react-native";

export const Title = styled.Text`
  font-weight: 600;
  font-size: 30px;
  color: ${({theme}) => theme.color3};
  padding-bottom: ${(props) => props.$paddingBottom};
`;