import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const UiButton = ({ children, ...props }) => {
  return (
    <Wrapper className='uibutton__wrapper'>
      <Button {...props}>{children}</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &.uibutton__wrapper {
    .ant-btn {
      border-radius: 4px;
      padding: 0;
      background: transparent;
      border: none;
      box-shadow: none;
    }
  }
`;

export default UiButton;
