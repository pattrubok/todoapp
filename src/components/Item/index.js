import React from "react";
import styled from "styled-components";
import { Row as AntRow, Col as AntCol } from "antd";

import { CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import { Confirm } from "../";

import AppContext from "../../assets/func/context";
import theme from "../../base/theme";
import { h5 } from "../../base/mixins/typography";

const Item = ({ text, infoList, infoTask, prefix }) => {
  const {
    showModal,
    setActiveList,
    iconSize,
    showDrawer,
    paddingCol,
    isList,
    setActiveTask,
    setIsEdit,
  } = React.useContext(AppContext);

  const onClickWrapper = () => {
    if (isList === true) {
      setActiveList(infoList);
    } else {
      setActiveTask(infoTask);
    }
  };

  const onEdit = () => {
    showModal();
    setIsEdit(true);
  };

  return (
    <Wrapper onClick={onClickWrapper}>
      <Row className='row-main'>
        <Col
          className='col-list'
          onClick={isList ? showDrawer : ""}
          style={{ padding: paddingCol }}
        >
          {prefix}
          <Text>{text}</Text>
        </Col>
        <Col>
          <Row className='row-icons' gutter={[20, 0]}>
            <Col>
              <EditOutlined
                onClick={onEdit}
                style={{
                  fontSize: iconSize,
                  color: theme.color.primary,
                }}
              />
            </Col>
            <Col>
              <Confirm>
                <CloseCircleOutlined
                  style={{ fontSize: iconSize, color: theme.color.primary }}
                />
              </Confirm>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${h5};
  cursor: pointer;
`;

const Row = styled(AntRow)`
  &.row-main {
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${(p) => p.theme.color.primary};
    flex-wrap: nowrap;
  }
  &.row-icons {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    div {
      :hover {
        cursor: pointer;
      }
    }
  }
`;

const Col = styled(AntCol)`
  &.col-list {
    display: flex;
    width: 100%;

    align-items: center;
  }
`;

const Text = styled.div`
  margin-left: 10px;
`;

export default Item;
