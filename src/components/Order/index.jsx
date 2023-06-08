import React from "react";

import {
  MatchesContainer,
  H1,
  Wrapper,
  Card,
  Icon,
  H2,
  P,
  A,
} from "./OrderElements";

import Icon1 from "../../Media/pizza.jpg";
import Icon2 from "../../Media/ice.jpg";
import Icon3 from "../../Media/ramen.jpg";
import { HStack } from "@chakra-ui/react";

const Matches = () => {
  return (
    <MatchesContainer id="order">
      <H1>Quick Bites!</H1>
      <Wrapper>
        <Card>
          <Icon src={Icon1} />
          <H2>Pizza</H2>
          <HStack spacing={15}>
            <P>$ 19.99</P>
            {/* <A to="checkout" target="_blank">Buy Now</A> */}
            <A href="https://shaadi-x.vercel.app/" target="_blank">Buy Now</A>
          </HStack>
        </Card>

        <Card>
          <Icon src={Icon2} />
          <H2>Ice Cream</H2>
          <HStack spacing={15}>
            <P>$ 12.99</P>
            {/* <A to="checkout" target="_blank">Buy Now</A> */}
            <A href="https://shaadi-x.vercel.app/" target="_blank">Buy Now</A>
          </HStack>
        </Card>

        <Card>
          <Icon src={Icon3} />
          <H2>Ramen</H2>
          <HStack spacing={15}>
            <P>$ 56.99</P>
            {/* <A to="checkout" target="_blank">Buy Now</A> */}
            <A href="https://shaadi-x.vercel.app/" target="_blank">Buy Now</A>
          </HStack>
        </Card>
      </Wrapper>
    </MatchesContainer>
  );
};

export default Matches;
