import React from "react";

import {
  OrderContainer,
  H1,
  Wrapper,
  Card,
  Icon,
  H2,
  P
} from "./HotelElements";

import Icon4 from "../../Media/pizzeria.jpg";
import Icon5 from "../../Media/cafe.jpg";
import Icon6 from "../../Media/chuffico.jpg";

const Discover = () => {
  return (
    <OrderContainer id="hotel">
      <H1>Discover</H1>
      <Wrapper>
      <Card>
          <Icon src={Icon4} />
          <H2>Pizzeria</H2>
          <P>Taste the New York's pizza!</P>
        </Card>

        <Card>
          <Icon src={Icon5} />
          <H2>Cafe Crepe</H2>
          <P>Pet-friendly!</P>
        </Card>

        <Card>
          <Icon src={Icon6} />
          <H2>Chuffico</H2>
          <P>Knock Knock :)</P>
        </Card>

      </Wrapper>
    </OrderContainer>
  );
};

export default Discover;