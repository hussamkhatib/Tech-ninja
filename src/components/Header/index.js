import styled from "styled-components";
import Logo from "./Logo";

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Heading>Tech Ninjas</Heading>
    </Wrapper>
  );
};

export default Header;

export const Wrapper = styled.div`
  display: flex;
`;

export const Heading = styled.h1`
  align-self: center;
  font-size: 1.8em;
`;
