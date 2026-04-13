import styled from "styled-components/native";
export function HomeTemplate() {
  return (
    <Container>
      <Texto>Componente</Texto>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Texto = styled.Text``;
