import {
  Card,
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
  Icon,
  createIcon,
  HStack,
} from "@chakra-ui/react";

import { Container, HeroBg, ImageBg } from "./CartElements";
import React from "react";
import img from "../../Media/cooking.jpg";
import pattern from "../../Media/pattern.jpg";

const icon = createIcon({
  displayName: "icon",
  viewBox: "0 0 270 270",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M101.176 83.8488C98.5247 83.8486 95.9818 82.7952 94.1069 80.9204L36.3293 23.1441C33.8284 20.6432 34.6443 16.4072 37.8953 15.0142L71.0386 0.812667C74.7963 -0.797461 79.1557 0.0422047 82.0464 2.93289L126.465 47.35C128.417 49.3023 131.582 49.3023 133.534 47.35L177.957 2.92817C180.848 0.037119 185.208 -0.802352 188.966 0.80853L222.11 15.016C225.361 16.4094 226.176 20.6449 223.676 23.1455L165.896 80.9236C164.021 82.7987 161.478 83.8521 158.826 83.852L101.176 83.8488ZM176.15 101.177C176.15 98.5251 177.204 95.9821 179.079 94.1071L236.858 36.3291C239.359 33.8283 243.595 34.644 244.988 37.8945L259.192 71.033C260.803 74.7907 259.963 79.1505 257.072 82.0415L212.649 126.464C210.697 128.416 210.697 131.581 212.649 133.533L257.072 177.955C259.962 180.845 260.802 185.205 259.192 188.962L244.99 222.105C243.597 225.356 239.361 226.172 236.86 223.671L179.078 165.89C177.203 164.015 176.15 161.472 176.15 158.821L176.15 101.177ZM165.894 179.074C164.019 177.199 161.476 176.146 158.824 176.146L101.174 176.15C98.5227 176.151 95.9799 177.204 94.105 179.079L36.326 236.856C33.8251 239.357 34.6411 243.593 37.8921 244.986L71.0349 259.187C74.7925 260.797 79.1519 259.957 82.0426 257.067L126.462 212.649C128.414 210.696 131.579 210.696 133.532 212.649L177.954 257.07C180.845 259.961 185.204 260.8 188.962 259.19L222.11 244.984C225.361 243.591 226.177 239.356 223.676 236.855L165.894 179.074ZM83.8503 158.826C83.8502 161.478 82.7968 164.021 80.9218 165.896L23.1429 223.673C20.642 226.174 16.4061 225.358 15.013 222.108L0.808097 188.961C-0.802227 185.203 0.0374166 180.844 2.92824 177.953L47.3473 133.535C49.2995 131.583 49.2995 128.418 47.3473 126.465L2.92938 82.0484C0.0385169 79.1576 -0.801103 74.798 0.809298 71.0404L15.015 37.8931C16.4081 34.6424 20.644 33.8266 23.1449 36.3274L80.9224 94.1037C82.7975 95.9788 83.8509 98.5218 83.8509 101.174L83.8503 158.826Z"
      fill="black"
    />
  ),
});

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
            <Text>Pay securely with Elusiv Privacy</Text>
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
                  <HStack>
                    <Text>Pay securely with Elusiv Privacy</Text>
                    <Icon as={icon}></Icon>
                  </HStack>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Pay
                  </Button>
                  <Button variant="ghost">Topup</Button>
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
