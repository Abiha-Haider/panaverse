"use client";
import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Menu,
  IconButton,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import png from "../../../public/Logo.png";

export default function Header() {
  return (
    <Box boxShadow="lg">
      <Container maxW={1400}>
        <SimpleGrid
          templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }}
        >
          <Box m="3">
            <Image src={png} alt="panaverse-logo" height={55}></Image>
          </Box>
          <Flex
            display={{ lg: "flex", base: "none" }}
            placeItems="center"
            color="black"
            fontSize={18}
            fontWeight="semibold"
            gap={10}
          >
            <Link href="/">Home</Link>
            <Link href="/syllabus">Syllabus</Link>
            <Link href="/faculty">Faculty</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </Flex>
          <Box display={{ lg: "initial", base: "none" }}>
            <Button
              m="20px"
              size="lg"
              bgGradient="linear(to-t, 
#0575E6,#333399
)"
              float="right"
              color="white"
            >
              <Link href={"https://portal.piaic.org/signup"}> Apply</Link>
            </Button>
          </Box>
          <Box pt="20px" display={{ lg: "none", base: "initial" }}>
            <Menu>
              <MenuButton
                float="right"
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>Syllabus</MenuItem>
                <MenuItem>Explore</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
