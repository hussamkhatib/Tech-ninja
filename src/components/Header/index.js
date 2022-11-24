import React from "react";
import { HeadWrapper, Heading } from "./headerStyles";
import Logo from "./Logo";

const Header = () => {
  return (
    <HeadWrapper>
      <Logo />
      <Heading>Tech Ninjas</Heading>
    </HeadWrapper>
  );
};

export default Header;
