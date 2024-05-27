import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getNotificationsTypes } from "../../API/Notification";

const Interact = ({ setIsDisplayInteract }) => {
  const [notificationType, setNotificationType] = useState([]);
  const [input, setInput] = useState({
    type: 'H',
    title: "",
    content: ""
  });

  const getTypes = async () => {
    try {
      const response = await getNotificationsTypes();
      setNotificationType(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBackClick = () => {
    setIsDisplayInteract(false);
  };

  const handleCreateClick = () => {
    console.log(input)
  };

  const handleTitleChange = (e) => {
    setInput({
      ...input,
      title: e.target.value,
    });
  };

  const handleTypeChange = (e) => {
    setInput({
      ...input,
      type: e.target.value,
    });
  };

  const handleContentChange = (e) => {
    setInput({
      ...input,
      content: e.target.value,
    });
  };

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <InteractStyled>
      <Label>Type</Label>
      <Select value={input.type} onChange={handleTypeChange}>
        {notificationType.map((value, index) => (
          <option key={index} value={value.name}>{value.name}</option>
        ))}
      </Select>
      <Label>Title</Label>
      <Input value={input.title} onChange={handleTitleChange}></Input>
      <Label>Content</Label>
      <TextArea value={input.content} onChange={handleContentChange}></TextArea>
      <BackCreateButton>
        <div className="Back" onClick={handleBackClick}>Back</div>
        <div className="Create" onClick={handleCreateClick}>Create</div>
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
