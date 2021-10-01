import React from "react";
import styled from "styled-components";
import { Input, Modal as AntModal, Col } from "antd";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

import AppContext from "../../assets/func/context";

import theme from "../../base/theme";

const Modal = ({ onChange }) => {
  const {
    activeList,
    handelOkModal,
    isModalVisible,
    inputValue,
    handleCancelModal,
    isList,
    isEdit,
    iconSize,
  } = React.useContext(AppContext);

  const modalProps = {
    title: !isEdit
      ? !isList
        ? `Добавьте пункт выполнения задачи ${
            activeList ? activeList.name : "имя"
          }`
        : "Добавьте название задачи"
      : "Введите измененное название",
    placement: "top",
    onClose: handelOkModal,
    visible: isModalVisible,
    onOk: handelOkModal,
    onCancel: handleCancelModal,
    closable: false,
    footer: [
      <Col className='col-modal'>
        <CheckCircleOutlined
          onClick={handelOkModal}
          style={{
            fontSize: iconSize,
            color: theme.color.primary,
          }}
        />
        <CloseCircleOutlined
          onClick={handleCancelModal}
          style={{
            fontSize: iconSize,
            color: theme.color.primary,
          }}
        />
      </Col>,
    ],
  };
  return (
    <Wrapper>
      <AntModal {...modalProps}>
        <Input
          placeholder='Введите название'
          onChange={onChange}
          value={inputValue}
        />
      </AntModal>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Modal;
