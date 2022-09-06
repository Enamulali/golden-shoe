import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1.5em;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const Checkout = () => {
  return (
    <Container>
      <h2>Here are the items in your basket!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex
        voluptatum modi fugiat architecto, quod, necessitatibus commodi
        quibusdam, accusantium tempora illo nobis aut eaque deserunt ut expedita
        eveniet non rem?
      </p>
    </Container>
  );
};

export default Checkout;
