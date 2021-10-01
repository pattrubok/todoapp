import React from "react";

import styled from "styled-components";
import { Item, AddItem } from "../";

import { Row, Col } from "antd";
import AppContext from "../../assets/func/context";

import { TagOutlined } from "@ant-design/icons";

import { UiDrawer } from "../Ui";
import { h5 } from "../../base/mixins/typography";

import { Task } from "../../components";

import theme from "../../base/theme";

const List = () => {
  const {
    listData,
    iconSize,
    activeList,
    onCloseDrawer,
    isDrawer,
    isList,
  } = React.useContext(AppContext);

  const drawerProps = {
    width: "100%",
    title: activeList.name,
    placement: "right",
    closable: true,
    onClose: onCloseDrawer,
    visible: isDrawer,
  };

  return (
    <Wrapper>
      <Row gutter={[0, 0]}>
        {listData &&
          listData.map((item) => (
            <Col style={{ width: "100%" }} key={item.id}>
              <Item
                text={item.name}
                infoList={item}
                prefix={
                  <TagOutlined
                    style={{ fontSize: iconSize, color: theme.color.primary }}
                    twoToneColor={theme.color.primary}
                  />
                }
              />
            </Col>
          ))}
        <Col className='col-additem'>
          <AddItem isList={isList} />
        </Col>
      </Row>
      <UiDrawer {...drawerProps}>
        <Task />
      </UiDrawer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .ant-btn {
    ${h5}
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 20px;
    height: 100%;
  }
  .col-additem {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

export default List;
