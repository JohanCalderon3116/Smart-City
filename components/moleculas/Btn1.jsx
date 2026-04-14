import styled from "styled-components/native";
import { TouchableOpacity, View, Text, Image } from "react-native";
import * as Linking from "expo-linking";

export function Btn1({
  funcion,
  titulo,
  bgcolor,
  imagen,
  url,
  color,
  disabled,
  width,
  height,
  icono,
  iconoPack,
  onPress,
}) {
  const handlePress = () => {
    if (url) Linking.openURL(url);
    if (funcion) funcion();
    if (onPress) onPress();
  };
  const IconoPack = iconoPack;
  return (
    <Container
      onPress={handlePress}
      disabled={disabled}
      $bgcolor={bgcolor}
      $width={width}
      $height={height}
    >
      <Content>
        {icono && IconoPack && (
          <IconoPack name={icono} size={22} color={color || "#fff"} />
        )}
        {imagen && (
          <ContentImage>
            <Image
              source={{ uri: imagen }}
              style={{ width: "100%", height: "100%" }}
            />
          </ContentImage>
        )}
        {titulo && <Text1 style={{ color: color }}>{titulo}</Text1>}
      </Content>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  background-color: ${(props) => props.$bgcolor || "#027ADE"};
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || 50};
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Content = styled.View`
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

const ContentImage = styled.View`
  width: 40px;
  height: 40px;
`;
const Text1 = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;
