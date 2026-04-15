import { useQuery } from "@tanstack/react-query";
import styled from "styled-components/native";
import { useUsuariosStore } from "../../store/UsuariosStore";
export function UsuariosTemplate() {
  const { mostrarusuarios } = useUsuariosStore();
  const {
    data: dataUsuarios,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: mostrarusuarios
  });
  if (error) {
    return <Texto>Error... {error.message} </Texto>;
  }
  if (isLoading) {
    return <Texto>Cargando...</Texto>;
  }
  return (
    <Container>
      {dataUsuarios.map((item, index) => {
        return (
          <SubContainer key={index}>
            <Texto> {item.nombre} </Texto>
            <Texto> {item.id_auth} </Texto>
            <Texto> {item.email} </Texto>
          </SubContainer>
        );
      })}
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Texto = styled.Text``;
const SubContainer = styled.View``;
