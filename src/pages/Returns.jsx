import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1.5em;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const Returns = () => {
  return (
    <Container>
      <h1>Returns information</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        neque quisquam atque a, laboriosam quod consectetur odio! Quam tempore
        cumque doloremque placeat totam mollitia saepe voluptate, eveniet esse
        in voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Modi ut itaque adipisci maxime. Reprehenderit totam ratione quam rerum,
        esse numquam suscipit quae aliquam odit, voluptate minus laudantium at
        in impedit?
      </p>

      <p>Need more help? Contact us via live chat here.</p>
    </Container>
  );
};

export default Returns;
