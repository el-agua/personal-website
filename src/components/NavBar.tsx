import { Flex, Icon, Slide, Link, Text, IconButton, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
type Link = {
    name: string;
    href: string;
}

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [links, setLinks] = React.useState<Link[]>([])
    const [currentPage, setCurrentPage] = React.useState("");
            const handleSetActive = (to: any) => {
                setCurrentPage(to);
            };
    React.useEffect(() => {
        setLinks(linksList)
    }, [])

    return (
                <Flex
                    height={["auto", "60px"]}
                    padding={4}
                    top={0}
                    bgColor="blue.900"
                    width="100vw"
                    position="fixed"
                    zIndex={2}
                    fontSize="xl"
                    alignContent="center"
                    justifyContent={"space-between"}
                >
                    <Flex mr={4} alignContent={"center"}>
                        {links.map(link => (
                            <Flex key={link.name} mx={4} alignItems="center" justifyContent={"center"}>
                                <ScrollLink 
                                    to={link.href} 
                                    smooth={true} 
                                    duration={500} 
                                    onSetActive={handleSetActive}
                                >
                                    <Text as="a" fontWeight={
                                        currentPage === link.href ? 'bold' : 'normal'
                                        } display="flex" color="gray.200" flexDir="column" justifyContent="center"
                                    >
                                        {link.name}
                                    </Text>
                                </ScrollLink>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            
        
        )
}

const linksList: Link[] = [
    {
        name: "Home",
        href: "Home"
    },
    {
        name: "About",
        href: "About"
    },
    {
        name: "Projects",
        href: "Projects"
    }
]
