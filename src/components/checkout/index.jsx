import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { Container, HeroBg, ImageBg } from "./CheckoutElements";
import React from "react";
import img from "../../Media/cooking.jpg";
import pattern from "../../Media/pattern.jpg";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // modal functionalities
  return (
    <Container id="checkout">
      <HeroBg>
        <ImageBg src={pattern} />
      </HeroBg>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">We are cooking!</Heading>
            <Text>Pay securely with Elusive Privacy.</Text>
            <Text color="#BF2A45" fontSize="2xl">
              0.5 SOL
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue" onClick={onOpen}>
              Pay now
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Elusiv Pay</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Pay securely with Elusive Privacy.</Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Button variant="ghost" colorScheme="blue">
              Use Razorpay
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Cart;
