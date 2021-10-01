import React from "react";

import { Popconfirm } from "antd";
import AppContext from "../../assets/func/context";

const Confirm = ({ children }) => {
  const { onConfirm, onCancel } = React.useContext(AppContext);
  return (
    <Popconfirm
      title='Вы уверены, что хотите удалить?'
      onConfirm={onConfirm}
      onCancel={onCancel}
      okText='Да'
      cancelText='Нет'
      placement='topLeft'
    >
      {children}
    </Popconfirm>
  );
};

export default Confirm;
