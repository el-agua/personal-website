import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Provider, Carousel,LeftButton, RightButton } from "chakra-ui-carousel";
import { Flex, Icon, Image, Box, Divider, Center, Link, Card, Spacer, Grid, Heading, Text, IconButton, useColorMode, useColorModeValue, Stack, Tag } from '@chakra-ui/react';
import React from 'react';

type Experience = {
    title: string,
    company: string,
    location: string,
    date: string,
    description: string,
    link: string,
    image: string,
    tags: string[]
}

export default function Splash() {
    return (
        <Flex width="100%" flexDir="column" justify={"center"}>
            <section id="Home">
            <Flex flex={2} mt={{base: "100", md: "0"}} flexDir={"column"} justify={"center"} align={"center"}>
                <Stack padding="10px" spacing="4" direction={{ base: "column", md: "row" }}>
                    <Flex height="100vh" width={{ base: "100%", md: "500px" }} align={"center"} justify={"center"} display={{ base: "none", md: "flex" }} 
                            visibility={{ base: "hidden", md: "visible" }}>
                        <Box boxSize={{ base: "250px", md: "350px" }}>
                            <Image borderRadius='10px' src="/squareshot.png" alt="J" />
                        </Box>
                    </Flex>
                    <Flex height="100vh" width={{ base: "100%", md: "500px" }} flexDir={"column"} flex={1} align={"center"} justify={"center"}>
                        <Heading as="h3" fontWeight="semibold" size={"xl"} mb="4">Hi, I&apos;m</Heading>
                        <Heading as="h1" size={"4xl"} mb="4">Daniel Zhao</Heading>
                        <Text as="div" fontWeight="semibold" fontSize={"2xl"} mb="4">Computer Science @ Penn</Text>
                        <Stack spacing="4" direction="row">
                        <Link href="https://www.linkedin.com/in/daniel-y-zhao/"><Icon as={FaLinkedin} boxSize={{ base: "40px", md: "50px" }} fill={"black"} _hover={{ fill: "blue.400", transitionDuration: '0.4s', transitionTimingFunction: "ease-in-out" }}/></Link>
                        <Link href="https://www.github.com/el-agua"><Icon  as={FaGithub} boxSize={{ base: "40px", md: "50px" }} fill={"black"} _hover={{ fill: "blue.400", transitionDuration: '0.4s', transitionTimingFunction: "ease-in-out" }} /></Link>
                        <Link href="mailto:dyzhao@seas.upenn.edu">   <Icon href="mailto:dyzhao@seas.upenn.edu" as={FaEnvelope} boxSize={{ base: "40px", md: "50px" }} fill={"black"} _hover={{ fill: "blue.400", transitionDuration: '0.4s', transitionTimingFunction: "ease-in-out" }} /></Link>
                        </Stack>
                    </Flex>
                </Stack>
            </Flex>
            </section>
            <section id="About">
            <Box minHeight="100vh" mt={{base: '10', md: '0'}}>
                <Center>
                    <Heading as="h3" alignSelf="center" fontWeight="semibold" size={"2xl"} mb="20">About Me</Heading>
                </Center>
                <Center>
                    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} alignItems={"center"} width={"75%"} gap={{ base: "4", md: "20" }} mt="2" alignSelf={"center"}>
                    <Flex justify={"center"} align={"center"} flex={1} flexDir={"column"}>
                            <Card bgColor={"gray.50"} borderRadius={"10px"}>
                                <Image borderTopRadius='10px' src={"/ISEFPRESCROP.jpeg"} alt="J" />
                                <Box p="4">
                                    <Text as="div" fontWeight="normal" fontSize={"lg"} mb="4">I&apos;m a student at the <strong>University of Pennsylvania</strong> pursuing a BSE in Computer Science.
                                        I&apos;m passionate about building technologies of the next generation. Some of my academic interests include applications of <strong>Machine Learning</strong> in the physical world, particularly in aerospace engineering and robotics. </Text>
                                    <Text as="div" fontWeight="normal" fontSize={"lg"} mb="0">Outside of school, you can find me at hackathons 💻, flying RC planes ✈️, or watching college football 🏈.</Text>
                                </Box>
                            </Card>
                        </Flex>
                        <Flex flexDir={"column"} flex={1} align="center" justify={"center"}>
                            {
                                experiences.map(experience => (
                                    <Card key={experience.title} bgColor={"gray.50"} height={"auto"} mb="4" p="4" borderRadius="10px" boxShadow="md">
                                        <Flex direction="row" justify="space-between">
                                            <Flex direction="column" >
                                                <Stack direction="row" align={"center"}>
                                                    <Box position="relative" right={{ base: "0", md: "45px" }} top="-5px">
                                                        <Image boxShadow="-10px 0 5px -10px #888" borderRadius='full' boxSize={{ base: "40px", md: "60px" }} src={experience.image} alt="J" />
                                                    </Box>
                                                    <Flex direction={"column"} ml={{ base: "0", md: "-40px" }}>
                                                        <Heading as="h4" fontWeight="semibold" size={"md"} mb="1">{experience.title}</Heading>
                                                        <Text as="div" color="gray.700" fontWeight="semilight" fontSize={"xs"} mb="1">{experience.company}</Text>
                                                        <Text as="div" color="gray.700" fontWeight="semilight" fontSize={"xs"} mb="1">{experience.location} | {experience.date}</Text>
                                                    </Flex>
                                                </Stack>
                                                <Divider mb="2" orientation='horizontal' />
                                                <Text as="div" fontWeight="normal" fontSize={"sm"} mb="0">{experience.description}</Text>
                                            </Flex>
                                        </Flex>
                                    </Card>
                                ))
                            }
                        </Flex>
                       
                    </Grid>
                </Center>
            </Box>
            </section>
            <section id="Projects">
            <Box minHeight="100vh" mt={{base: '10', md: '0'}}>
                <Center>
                    <Heading as="h3" alignSelf="center" fontWeight="semibold" size={"2xl"} mb="20">Projects</Heading>
                </Center>
                <Center>
                    <Grid
                        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
                        alignItems={"center"}
                        gridRowGap="4"
                        width={"80%"}
                        alignSelf={"center"}
                        justifyItems={"center"}
                    >
                        {projects.map((project, index) => (
                            <Card key={index} bgColor={"gray.50"} borderRadius={"10px"} width={{ base: "90%", md: "600px" }} alignSelf={"center"}>
                                <Image borderTopRadius='10px' w={"100%"} src={project.image} alt="Image"></Image>
                            <Box height={{base: "auto", md: "200px"}} p="4">
                                <Heading as="h4" fontWeight="semibold" size={"md"} mb="1">{project.title}</Heading>
                                <Box mt="2" mb="2">
                                    {project.tags.map((tag,i) => (
                                        <Tag key={i} mr="1">{tag}</Tag>
                                    ))}
                                </Box>
                                <Text as="div" fontWeight="normal" fontSize={"sm"} mb="0">{project.description}</Text>
                            </Box>
                            </Card>
                        ))}
                    </Grid>
                </Center>
            </Box>
            </section>
            <Center mt="20">
                <Text fontSize={"xs"} fontWeight="light" color="gray.400">Airspeed, Altitude, Atmosphere 🛫</Text>
            </Center>
            <Center mt="2" mb="5">
                <Text fontSize={"xs"} fontWeight="light" color="gray.400">Made by Daniel Zhao</Text>
            </Center>
        </Flex>
    );
}
                        

const experiences: Experience[] = [
    {
        title: "Backend Engineer",
        company: "PennLabs",
        location: "Philadelphia, PA",
        date: "September 2023 - Present",
        description: "Develop and maintain the Django Penn Courses API, which serves as a tool for thousands of Penn students to plan, search, and compare courses. Integrated schedule solving algorithms into the Penn Course Plan web application.",
        link: "https://pennlabs.org",
        image: "/labs.png",
        tags: ["Python", "Django", "PostgreSQL", "Docker"]
    },
    {
        title: "Embedded Software Engineer",
        company: "Penn Electric Racing",
        location: "Philadelphia, PA",
        date: "September 2023 - Present",
        description: "Build embedded system codebases for custom printed circuit boards (PCBs) in C++ to control the FSAE vehicle's motor, battery, and other subsystems. Implement popular communication protocols such as CAN, I2C, SPI, and UART to interface with the vehicle's sensors and actuators.",
        link: "https://www.pennelectricracing.com/",
        image: "/per.jpg",
        tags: ["C++", "Control Theory", "Embedded Systems"]
    },
    {
        title: "Visiting Researcher",
        company: "Georgia Institute of Technology, School of Aerospace Engineering",
        location: "Remote",
        date: "May 2022 - March 2023",
        description: "I worked with the Vamvoudakis Lab to study and develop Reinforcement Learning (RL) algorithms for autonomous flight and optimal control. Completed an independent project in autonomous tracking of aerial objects.",
        link: "/",
        image: "/gt.jpg",
        tags: ["MATLAB","Machine Learning","Reinforcement Learning"]
    },

]

const projects = [
    {
        title: "Lan-DLE: Autonomous Landing of Fixed-Wing Aircraft",
        description: "A Machine Learning system for robust autonomous landing of fixed-wing aircraft. I trained 10 individual Artificial Neural Networks to learn pilot inputs while landing a plane. To quantify uncertainty, I used the \"bagging\" method of ensembling to evaluate model safety. Presented at the 2022 International Science and Engineering Fair in Atlanta, GA.",
        link: "/",
        image: "/posta.png",
        tags: ["Python", "PyTorch", "Machine Learning"]
    },
    {
        title: "TrackAiR: Tracking Moving Aerial Targets with RL",
        description: "A Reinforcement Learning algorithm designed for an aerial agent to track a moving target with unknown dynamics. Employed the Actor-Critic algorithm for RL, and a MATLAB simulation was run to test performance in a real-life scenario. Presented at the 2023 International Science and Engineering Fair in Dallas, TX.",
        link: "/",
        image: "/isefgifgif.gif",
        tags: ["MATLAB", "Reinforcement Learning", "Control Theory"]
    },
    {
        title: "Teddy: Cancer Risk Assessment App",
        description: "A full-stack medical app that allows patients to assess their risk of cancer from their genetic history. I was responsible for building the frontend with React, and I also implemented the Deep Learning model with TensorFlow. This was made in a week as part of a 4-person team at the 2021 HudsonAlpha Genomics Tech Challenge, where we won 1st place.",
        link: "https://devpost.com/software/teddy-f246gj",
        image: "/realteddy.png",
        tags: ["JavaScript","React.js","Go","TensorFlow"]
    },
    {
        title: "Pencl Testing Platform",
        description: "Looking for a way to host math competitions during the pandemic, I created Pencl, an online testing platform that makes it easy to create and share problems as well as host contests. This app achieved recognition at the 2021 Alabama Governor's Computer Science Summit.",
        link: "/",
        image: "/pencl.png",
        tags: ["JavaScript","Vue.js","Express.js","MongoDB"]
    },
]