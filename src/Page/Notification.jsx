import React, { useEffect, useState } from "react";
import NotificationBlock from "../Component/Notifications/NotificationBlock";
import styled from "styled-components";
import { getNotifications } from "../API/Notification";
import Interact from "../Component/Notifications/Interact";

const Notification = () => {
  const [notificationData, setNotificationData] = useState([]);
  const [isDisplayInteract, setIsDisplayInteract] = useState(false);

  const fetchNotificationData = async () => {
    try {
      const response = await getNotifications();
      setNotificationData(response.data);
    } catch (error) {
      console.log('Error fetching notifications');
    }
  };

  useEffect(() => {
    fetchNotificationData();
  }, []);

  const handleCreateClick = () => {
    setIsDisplayInteract(true);
  };

  return (
    <NotificationStyled>
      <Header>
        <LeftGroup>
          <p>Notification by</p>
          <select defaultValue="newest to oldest">
            <option>newest to oldest</option>
            <option>oldest to newest</option>
            <option>label</option>
            <option>sender</option>
          </select>
        </LeftGroup>
        <RightGroup>
          <input placeholder="Find something ..."></input>
        </RightGroup>
      </Header>
      <Create onClick={handleCreateClick}>
        <div>Create</div>
      </Create>
      {isDisplayInteract ? (
        <Interact setIsDisplayInteract={setIsDisplayInteract} type />
      ) : (
        notificationData.map((value, index) => (
          <NotificationBlock key={index} data={value} />
        ))
      )}
    </NotificationStyled>
  )
}

export default Notification;



const NotificationStyled = styled.div`
  user-select: none;
  width: 100%;
  height: 100%;
`

const Header = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Create = styled.div`
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: start;
  div {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8%;
    height: 70%;
    font-size: 1.5em;
    border: none;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`

const LeftGroup = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  p {
    display: flex;
    justify-content: start;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 3em;
    margin: 0;
  }
  select {
    height: auto;
    background-color: transparent;
    border: none;
    appearance: none;
    color: #a6ff7d;
    font-size: 3em;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    &:hover {
      cursor: pointer;
    }
  }
`

const RightGroup = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  input {
    height: 50%;
    width: 100%;
    font-size: 1.75em;
    padding-left: 5%;
    border-radius: 20px;
    outline: none;
    font-weight: bold;
  }
`

const Content = styled.div`
`
