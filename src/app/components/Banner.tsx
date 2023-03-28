import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Link
} from "@chakra-ui/react";
// import Image from 'next/image'
import png from "../../public/logo2.webp";
import { RevealWrapper } from "next-reveal";

export default function Banner() {
  return (
    <>
      <Box
        bgAttachment="fixed"
        bgSize="cover"
        bgImage="https://img.freepik.com/free-vector/abstract-design-background-with-blue-purple-gradient_1048-13167.jpg"
      >
        <Container maxW={1400}>
          <Flex
            pt={{ lg: "150px", base: "30px" }}
            pb={{ lg: "100px", base: "20" }}
            px={{ lg: "40px", base: "20px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box
              flexBasis={{ lg: "50%", base: "%" }}
              px={{ lg: "40px", base: "0" }}
            >
              {" "}
              <RevealWrapper
                origin="left"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Heading color="white" size="sm" mb="50px">
                  Presidential Initiative for Artificial Intelligence and
                  Computing (PIAIC)
                </Heading>
                <Heading color="white" size="2xl" mb="25px">
                  Certified Web 3.0 and Metaverse Developer
                </Heading>
                <Text color="white" pt="10px">
                  One Year Panaverse DAO Earn as you Learn Program.
                  Consolidating Web 3.0, Metaverse, Artificial Intelligence
                  (AI), Cloud, Edge, and Ambient Computing/IoT Technologies
                </Text>
                <Button
                  mt="50px"
                  size="lg"
                  colorScheme="blue"
                  bgGradient="linear(to-t,#0575E6,#333399)"
                >
                  <Link href='../syllabus'>More Info</Link>
                </Button>{" "}
              </RevealWrapper>
            </Box>
            <Box mt={{ lg: "-80px", base: "5" }} flexBasis="50%">
              <RevealWrapper
                origin="top"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Image
                  src="/pic1.png"
                  alt="Panaverse"
                  width={{ lg: "600", base: "400" }}
                  height={{ lg: "400", base: "300px" }}
                />{" "}
              </RevealWrapper>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Container maxW={1400}>
          <Flex
            gap={{ lg: "200px", base: "10px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            {" "}
            <RevealWrapper
              origin="top"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Box flexBasis="50%">
                <Image
                  src="/7.png"
                  alt="Panaverse"
                  width={{ lg: "700", base: "100" }}
                  height={{ lg: "400", base: "200" }}
                />
              </Box>{" "}
            </RevealWrapper>
            <Box
              flexBasis="50%"
              pt={{ lg: "80px", base: "10px" }}
              // px={{ lg: "100", base: "5px" }}
            >
              <RevealWrapper
                origin="right"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Heading size="2xl">Program Of Studies</Heading>
                <Text pr={{ lg: "10px", base: "25px" }} pt="10px">
                  This curriculum is intended for beginners who want to learn
                  software development from the ground up. It is going to be a
                  fifteen-month-long hybrid program that includes both onsite
                  and online classes and is divided into five quarters of 13
                  weeks each. The emphasis will be on hands-on learning by
                  educating students to produce projects.
                </Text>
                <Button
                  mt="10px"
                  size="lg"
                  colorScheme="darkblue"
                  bgGradient="linear(to-t, #0575E6,#333399)"
                >
                  Read More
                </Button>
              </RevealWrapper>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container maxW={1400}>
          <Flex
            gap={{ lg: "100px", base: "10px" }}
            display={{ lg: "flex", base: "grid" }}
          >
            <Box
              flexBasis="50%"
              pl={{ lg: "60px", base: "5px" }}
              pt={{ lg: "80px", base: "30px" }}
            >
              <RevealWrapper
                origin="left"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Heading size="2xl">Earn While You Learn</Heading>
                <Text pr={{ lg: "50px", base: "25px" }} pt="10px">
                  In this brand-new type of curriculum, students will learn how
                  to make money and boost exports in the classroom and will
                  begin doing so within six months of the program’s beginning.
                  It resembles a cross between a corporate venture and an
                  educational project.
                </Text>
                <Button
                  mt="10px"
                  size="lg"
                  colorScheme="blue"
                  bgGradient="linear(to-t, #0575E6,#333399)"
                >
                  Read More
                </Button>
              </RevealWrapper>
            </Box>
            <Box flexBasis="50%">
              <RevealWrapper
                origin="right"
                delay={200}
                duration={1000}
                distance="500px"
                reset={true}
              >
                <Image
                  src="/logo2.webp"
                  alt="Panaverse"
                  width={{ lg: "700", base: "100" }}
                  height={{ lg: "400", base: "200" }}
                />
              </RevealWrapper>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
