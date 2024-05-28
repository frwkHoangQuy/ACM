import React from "react";
import NotificationBlock from "../../Component/Notifications/NotificationBlock";
import Interact from "../../Component/Notifications/Interact";
import { Loading } from "../Loading";
import { Error } from "../Error";
import { NotificationStyled, Header, LeftGroup, RightGroup, Create } from "./Notification.styled";
import useFetchNotification from "../../Hooks/Notification/useFetchNotifications";
import useNotificationStore from "../../Context";

const Notification = () => {
  const { isDisplayInteract, displayInteract, setInteractType, interactType, createInteract } = useNotificationStore();
  const { notifications, loading, error } = useFetchNotification();

  const handleCreateClick = () => {
    createInteract();
    setInteractType("Create");
    displayInteract();
  };

  if (error) return <Error error={error}></Error>
  if (loading) return <Loading></Loading>;

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
          <input placeholder="Find something ..." />
        </RightGroup>
      </Header>
      <Create>
        <button onClick={handleCreateClick} disabled={interactType !== "Create"}>Create</button>
      </Create>
      {isDisplayInteract ? (
        <Interact />
      ) : (
        notifications.map((value, index) => (
          <NotificationBlock key={index} data={value} />
        ))
      )}
    </NotificationStyled>
  );
};

export default Notification;
