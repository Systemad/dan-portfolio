import { ButtonGroup, Center, IconButton, Stack, Text, Link, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Logo } from "./Logo";

const Footer = () => {
  return (
    <Center>
      <Stack spacing={{ base: "4", md: "5" }} mt="2rem">
        <Stack justify="center" direction="row" align="center">
          <Logo />
          <ButtonGroup variant="ghost">
            <IconButton
              as={Link}
              isExternal
              href="https://www.linkedin.com/in/dan-elf-a538b51a2/"
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as={Link}
              isExternal
              href="https://github.com/Systemad/"
              target="_blank"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <Button as={Link} href="https://blog.danova.me/" aria-label="blog" isExternal variant="ghost">
              Blog
            </Button>
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Danova, Inc. All rights reserved.
        </Text>
      </Stack>
    </Center>
  );
};

export default Footer;
