import React from "react";

import styled from "styled-components";
const Card = ({ children, Active }) => {
  const CardWrapper = styled.div`
    border: 3px solid ${Active};
  `;

  return (
    <>
      <CardWrapper>{children}</CardWrapper>
    </>
  );
};

export default Card;
