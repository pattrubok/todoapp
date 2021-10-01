import React, { useState } from "react";
import styled from "styled-components";

import AppContext from "./assets/func/context";

import { api } from "./assets/func/api";
import { AppContainer } from "./components";

import { down } from "styled-breakpoints";
import { useBreakpoint } from "styled-breakpoints/react-styled";

import { message } from "antd";

import "./App.less";

import { h4 } from "./base/mixins/typography";

const DEFAULT_LIST_OBJ = { name: "ЗАДАЧА", id: 0 };
const DEFAULT_TASK_OBJ = { text: "ЗАДАЧА", id: 0 };

const App = () => {
  const [listData, setListData] = useState();
  const [taskData, setTaskData] = useState();
  const [activeList, setActiveList] = useState(DEFAULT_LIST_OBJ);
  const [activeTask, setActiveTask] = useState(DEFAULT_TASK_OBJ);
  const [isList, setIsList] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);

  const [isConfirmed, setIsConfirmed] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  console.log(activeList.name, "activeTask.text");
  const [inputValue, setInputValue] = useState();

  const isMd = useBreakpoint(down("md"));

  const fetchDataList = async () => {
    const response = await api.get("lists");
    setListData(response);
  };

  const fetchDataTask = async () => {
    const response = await api.get("tasks");
    setTaskData(response);
  };

  const itemId = isList ? activeList.id : activeTask.id;
  // Удаление
  const onDeleteItem = () => {
    const changeData = (arr) => {
      return arr.filter((item) => item.id !== itemId);
    };

    const handleDeleteList = () => {
      api.delete("lists/" + itemId).then(() => {
        setListData(changeData(listData));
      });
    };

    const handleDeleteTask = () => {
      api.delete("tasks/" + itemId).then(() => {
        setTaskData(changeData(taskData));
      });
    };

    if (isList === true) {
      handleDeleteList();
    } else {
      handleDeleteTask();
    }
    fetchDataTask();
  };

  // Создание
  const onAddItem = (value, isList) => {
    const handleAddList = () => {
      api.post("lists", { name: value }).then(() => {
        fetchDataList();
        setActiveList(DEFAULT_LIST_OBJ);
      });
    };
    const handleAddTask = () => {
      api
        .post("tasks", {
          text: value,
          listId: activeList.id,
          checked: false,
        })
        .then(() => {
          fetchDataTask();
        });
    };
    if (isList === true) {
      handleAddList();
    } else {
      handleAddTask();
    }
  };

  const onChangeTaskStatus = (obj, e) => {
    const isChecked = e.target.checked;
    const newDataWithChecked = taskData.map((item) => {
      if (item.id === obj.id) {
        item.checked = isChecked;
      }
      return item;
    });

    setTaskData(newDataWithChecked);
    api
      .put("tasks/" + obj.id, {
        checked: isChecked,
      })
      .then(() => {
        fetchDataTask();
      });
  };

  const onEditText = () => {
    const handleEditList = () => {
      const newLists = listData.map((item) => {
        if (item.id === itemId) {
          item.name = inputValue;
        }
        return item;
      });
      setTaskData(newLists);
      api
        .put("lists/" + itemId, {
          name: inputValue,
        })
        .then(() => {
          fetchDataList();
        });
    };

    const handleEditTask = () => {
      const newTasks = taskData.map((item) => {
        if (item.id === itemId) {
          item.text = inputValue;
        }
        return item;
      });
      setTaskData(newTasks);
      api
        .put("tasks/" + itemId, {
          text: inputValue,
        })
        .then(() => {
          fetchDataTask();
        });
    };

    const rootEditItem = () => {
      if (isList === true) {
        handleEditList();
      } else {
        handleEditTask();
      }
    };

    rootEditItem();
  };

  React.useEffect(() => {
    fetchDataList();
    fetchDataTask();
    setInputValue(isEdit ? (isList ? activeList.name : activeTask.text) : "");
  }, [isModalVisible]);

  const showDrawer = () => {
    setIsDrawer(true);
    setIsList(false);
  };
  const onCloseDrawer = () => {
    setIsDrawer(false);
    setIsList(true);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handelOkModal = () => {
    const warning = () => {
      message.warning("Введите название списка!");
    };

    if (!inputValue) {
      warning();
      return;
    }
    if (isEdit) {
      onEditText();
    } else {
      onAddItem(inputValue, isList);
    }

    setIsModalVisible(false);
    setIsEdit(false);
  };

  const handleCancelModal = () => {
    setIsModalVisible(false);
    setIsEdit(false);
  };

  const onConfirm = () => {
    setIsConfirmed(true);
    onDeleteItem(activeList, isList);
  };

  const onCancel = () => {
    setIsConfirmed(false);
  };

  const iconSize = isMd ? "24px" : "32px";
  const paddingCol = isMd ? "10px" : "20px";

  const isAppReady = listData && taskData;

  return (
    <Wrapper>
      <AppContext.Provider
        value={{
          listData,
          activeList,
          onDeleteItem,
          setActiveList,
          onAddItem,
          onEditText,
          taskData,
          onChangeTaskStatus,
          isMd,
          iconSize,
          showDrawer,
          onCloseDrawer,
          showModal,
          handelOkModal,
          handleCancelModal,
          isModalVisible,
          isDrawer,
          inputValue,
          setInputValue,
          paddingCol,
          setIsList,
          isList,
          onCancel,
          onConfirm,
          setActiveTask,
          activeTask,
          setIsEdit,
          isEdit,
        }}
      >
        <AppContainer isAppReady={isAppReady} />
      </AppContext.Provider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-weight: bold;
  height: 100vh;

  .ant-spin-dot {
    margin-top: 80px;
  }
  .ant-spin-text {
    ${h4}
  }
`;

export default App;
