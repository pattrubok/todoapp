import React from "react";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import AppContext from "../../../assets/func/context";

import { Drawer } from "antd";

const UiDrawer = ({ children, ...props }) => {
  const { iconSize } = React.useContext(AppContext);
  return (
    <Wrapper>
      <Drawer
        closeIcon={<CloseOutlined style={{ fontSize: iconSize }} />}
        {...props}
      >
        {children}
      </Drawer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default UiDrawer;
