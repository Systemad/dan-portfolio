import {
    ButtonGroup,
    Center,
    Container,
    IconButton,
    Stack,
    Text,
    Icon,
} from "@chakra-ui/react"
import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Logo } from "./Logo"

const Footer = () => {
    return (
        <Center>
            <Stack spacing={{ base: "4", md: "5" }} mt="2rem">
                <Stack justify="center" direction="row" align="center">
                    <Icon viewBox="0 0 200 200" color="red.500">
                        <path fill="currentColor" d="" />
                    </Icon>
                    <ButtonGroup variant="ghost">
                        <IconButton
                            as="a"
                            href="#"
                            aria-label="LinkedIn"
                            icon={<FaLinkedin fontSize="1.25rem" />}
                        />
                        <IconButton
                            as="a"
                            href="#"
                            aria-label="GitHub"
                            icon={<FaGithub fontSize="1.25rem" />}
                        />
                        <IconButton
                            as="a"
                            href="#"
                            aria-label="Twitter"
                            icon={<FaTwitter fontSize="1.25rem" />}
                        />
                    </ButtonGroup>
                </Stack>
                <Text fontSize="sm" color="subtle">
                    &copy; {new Date().getFullYear()} Danova, Inc. All rights
                    reserved.
                </Text>
            </Stack>
        </Center>
    )
}

export default Footer
