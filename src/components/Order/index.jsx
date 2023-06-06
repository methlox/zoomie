import React from "react";

import {
  MatchesContainer,
  H1,
  Wrapper,
  Card,
  Icon,
  H2,
  P
} from "./OrderElements";

import Icon1 from "../../Media/pizza.svg";
import Icon2 from "../../Media/ice.svg";
import Icon3 from "../../Media/ramen.svg";

const Matches = () => {
  return (
    <MatchesContainer id="order">
      <H1>Quick Bites!</H1>
      <Wrapper>
        <Card>
          <Icon src={Icon1} />
          <H2>Pizza</H2>
          <P>
            $ 19.99
          </P>
        </Card>

        <Card>
          <Icon src={Icon2} />
          <H2>Ice Cream</H2>
          <P>$ 12.99</P>
        </Card>

        <Card>
          <Icon src={Icon3} />
          <H2>Ramen</H2>
          <P>$ 56.99</P>
        </Card>

      </Wrapper>
    </MatchesContainer>
  );
};

export default Matches;