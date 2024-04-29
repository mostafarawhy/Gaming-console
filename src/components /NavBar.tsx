import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link  href="http://localhost:5173/">
        <Image src={logo} boxSize="80px" />
      </Link>

      <DarkModeSwitch />
    </HStack>
  );
};

export default NavBar;
