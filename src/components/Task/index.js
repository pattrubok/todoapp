import React from "react";
import styled from "styled-components";
import { Item, AddItem } from "../";
import { Row, Col, Checkbox } from "antd";

import AppContext from "../../assets/func/context";

const Task = () => {
  const { activeList, taskData, onChangeTaskStatus, isList } = React.useContext(
    AppContext
  );
  const newData = taskData.filter((item) => item.listId === activeList.id);

  return (
    <Wrapper>
      <Row className='main-row' gutter={[0, 20]}>
        <Col>
          {newData.map((item) => (
            <Item
              key={item.id}
              text={item.text}
              infoTask={item}
              prefix={
                <Checkbox
                  onChange={(e) => onChangeTaskStatus(item, e)}
                  checked={item.checked}
                />
              }
            />
          ))}
        </Col>
        <Col>
          <AddItem isList={isList} />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-row {
    flex-direction: column;
  }
`;

export default Task;
