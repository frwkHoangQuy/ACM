import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useFetchNotificationTypes from "../../Hooks/Notification/useFetchNotificationTypes";
import useNotificationStore from "../../Context";

const Interact = () => {
  const { notificationTypes, loading, error } = useFetchNotificationTypes()
  const { interactInput, editInteract, cancelInteract, interactType, setInteractType } = useNotificationStore()

  const handleBackClick = () => {
    setInteractType("Create");
    cancelInteract();
  };

  const handleSaveClick = () => {
    if (interactType == "Edit") {
      console.log("Edit")
    }
    else {
      console.log("Create");
    }
  };

  const handleTitleChange = (e) => {
    editInteract({ title: e.target.value });
  };

  const handleTypeChange = (e) => {
    editInteract({ type: e.target.value });
  };

  const handleContentChange = (e) => {
    editInteract({ content: e.target.value });
  };

  return (
    <InteractStyled>
      <Label>Type</Label>
      <Select value={interactInput.type} onChange={handleTypeChange}>
        {notificationTypes.map((value, index) => (
          <option key={index} value={value.name}>{value.name}</option>
        ))}
      </Select>
      <Label>Title</Label>
      <Input value={interactInput.title} onChange={handleTitleChange}></Input>
      <Label>Content</Label>
      <TextArea value={interactInput.content} onChange={handleContentChange}></TextArea>
      <BackCreateButton>
        <div className="Back" onClick={handleBackClick}>Back</div>
        <div className="Create" onClick={handleSaveClick}>{interactType}</div>
      </BackCreateButton>
    </InteractStyled>
  );
};

export default Interact;

const InteractStyled = styled.div`
  padding: 0 3%;
  margin: auto;
  margin-top: 2%;
  background-color: #2b2e38;
  width: 70%;
  height: 60%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Label = styled.p`
  color: #84ff7e;
  font-size: 1.5em;
  height: auto;
  margin: 0;
`;

const Input = styled.input`
  height: auto;
  width: 100%;
  font-size: 1.5em;
  border-radius: 20px;
  padding: 1% 1.5%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: auto;
  font-size: 1.5em;
  border-radius: 20px;
  padding: 1% 1.5%;
`;

const Select = styled.select`
  width: 100%;
  border-radius: 20px;
  font-size: 1.5em;
  padding: 1% 1.5%;
  option {
    font-size: 1.1em;
  }
  &:hover {
    cursor: pointer;
  }
`;

const BackCreateButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  .Back {
    margin: 1%;
    font-size: 1.5em;
    color: #84ff7e;
    &:hover {
      cursor: pointer;
    }
  }
  .Create {
    margin: 1%;
    font-size: 1.5em;
    color: #84ff7e;
    &:hover {
      cursor: pointer;
    }
  }
`;
