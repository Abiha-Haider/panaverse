'use client'

import { Box, Container, Grid, Heading, SimpleGrid, Text, Image,Flex ,useColorModeValue, IconButton, Input ,Stack} from "@chakra-ui/react"
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

import Link from "next/link"


export default function Footer() {
    return (
      <Box
        bgSize={"cover"}
        bgImage="https://freedesignfile.com/upload/2021/02/Blue-purple-gradient-background-vector.jpg"
      >
        <Container maxW={1300}>
          <SimpleGrid
            textAlign={{ lg: "start", base: "center" }}
            spacing="30px"
            py="60px"
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
          >
            <Box>
              <Heading size={"md"} pb="20px" color="white">
                About Us
              </Heading>
              <Image ml={{lg:'0', base:'120'}}
                // mt={{ base: "auto", lg: "1" }}
                mb={{ base: "auto", lg: "3" }}
                src="/Logo.png"
                height={"73"}
                alt="Panaverse"
              ></Image>
              <Flex
                mt="7"
                color="white"
                gap={"6"}
                justifyContent={{ lg: "initial", base: "center" }}
              >
                <Link href="https://www.instagram.com/piaicofficial/">
                  <FaInstagram size="25" />
                </Link>
                <Link href="https://twitter.com/piaicofficial?s=20&t=S4-z5_47QCTP1rZtDRY3iA">
                  <FaTwitter size="25" />
                </Link>
                <Link href="https://www.youtube.com/@panaverse">
                  <FaYoutube size="25" />
                </Link>
                <Link href="https://github.com/panaverse">
                  <FaGithub size="25" />
                </Link>
              </Flex>
              <Text mt="5" fontSize={"md"} color={"white"}>
                Designed by Abiha Fatima          
              </Text>
            </Box>
            <Box>
              <Heading size={"md"} color="white">
                Useful Links
              </Heading>
              <Grid pt="40px" color="white">
                <Link href="/">Home</Link>
                <Link href="/">Syllabus</Link>
                <Link href="/">Explore</Link>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
              </Grid>
            </Box>
            <Box>
              <Heading size={"md"} color="white">
                Follow Us
              </Heading>
              <Grid pt="40px" color="white">
                <Link href="/">Facebook</Link>
                <Link href="/">Linkedin</Link>
                <Link href="/">Twitter</Link>
                <Link href="/">Youtube</Link>
                <Link href="/">GitHub</Link>
              </Grid>
            </Box>
            <Box>
              <Heading mb="8" size={"md"} color="white">
                Contact Us
              </Heading>
              <Stack align={{ lg: "flex-start", base: "center" }}>
                
                <Stack direction={"row"}>
                  <Input
                    placeholder={"Your email address"}
                    bg={useColorModeValue("white", "white")}
                    border={0}
                    _focus={{
                      bg: "whiteAlpha.300",
                    }}
                  />
                  <IconButton
                    bg={useColorModeValue("purple", "purple")}
                    color={useColorModeValue("white", "gray.100")}
                    _hover={{
                      bg: "darkblue",
                    }}
                    aria-label="Subscribe"
                    icon={<BiMailSend />}
                  />
                </Stack>
                        
              </Stack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    );
}

