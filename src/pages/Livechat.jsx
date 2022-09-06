import styled from "styled-components";
import Chat from "../components/Chat";

const Container = styled.div`
  padding: 1.5em;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const Livechat = () => {
  return (
    <Container>
      <Chat />
    </Container>
  );
};

export default Livechat;
