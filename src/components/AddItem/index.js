import React from "react";
import styled from "styled-components";
import { UiButton } from "../Ui";
import { Modal } from "../";

import { Row, Col as AntCol } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import AppContext from "../../assets/func/context";
import theme from "../../base/theme";

const AddItem = () => {
  const { iconSize, showModal, setInputValue } = React.useContext(AppContext);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Wrapper>
      <Row style={{ width: "100%" }}>
        <Col className='col-btn'>
          <UiButton onClick={showModal}>
            <PlusCircleOutlined
              style={{ fontSize: iconSize, color: theme.color.primary }}
              twoToneColor={theme.color.primary}
            />
            <Text>Добавить</Text>
          </UiButton>
        </Col>
        <Modal onChange={onChange} />
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  .anticon {
    margin-right: 10px;
  }
  .ant-input {
    width: 100%;
  }

  .col-btn {
    display: flex;
    justify-content: center;
  }
`;

const Text = styled.div`
  font-weight: 700;
`;

const Col = styled(AntCol)`
  width: 100%;
`;
export default AddItem;
