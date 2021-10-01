import React from "react";
import styled from "styled-components";

import { List, Header, Background } from "../../components";
import { Row, Col, Spin } from "antd";

const AppContainer = ({ isAppReady }) => {
  return (
    <Wrapper>
      <Background />
      {isAppReady ? (
        <div>
          <Row className='row-main-content'>
            <Col span={24}>
              <Header />
            </Col>
            <Col span={24}>
              <List />
            </Col>
          </Row>
        </div>
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Spin tip='Загрузка через 40 секунд...' size='large' />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .row-main-content {
    padding: 40px;
  }
`;

export default AppContainer;
