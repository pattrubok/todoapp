import React, { useContext } from "react";
import styled from "styled-components";

import { Row as AntRow, Col as AntCol } from "antd";

import { h3, h4 } from "../../base/mixins/typography";

import AppContext from "../../assets/func/context";
import { down } from "styled-breakpoints";

const Header = ({ name }) => {
  const { paddingCol, isMd } = useContext(AppContext);

  return (
    <Wrapper>
      <Row>
        {name && (
          <Col
            span={isMd ? 12 : 8}
            className='col-name'
            style={{ padding: paddingCol }}
          >
            <Title>Имя</Title>
          </Col>
        )}
        <Col
          span={name ? (isMd ? 12 : 16) : 24}
          className='col-title'
          style={{ padding: paddingCol }}
        >
          <Title>Ваши задачи</Title>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Row = styled(AntRow)`
  width: 100%;
  border-bottom: 1px solid ${(p) => p.theme.color.primary};
`;

const Col = styled(AntCol)`
  &.col-name {
    border-right: 2px solid ${(p) => p.theme.color.primary};
  }
  &.col-title {
    display: flex;
    justify-content: center;
  }
`;

const Title = styled.div`
  white-space: nowrap;
  ${h3}
  ${down("md")} {
    ${h4};
  }
`;

export default Header;
