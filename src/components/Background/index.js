import React from "react";
import styled from "styled-components";

const Background = () => {
  return <Wrapper className='background' />;
};

const Wrapper = styled.div`
  z-index: -1;
  background-image: url("/static/img/background2.jpeg");
  background-size: cover;
  position: fixed;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export default Background;
