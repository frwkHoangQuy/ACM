import React, { useEffect, useState } from "react";
import NotificationBlock from "../../Component/Notifications/NotificationBlock";
import Interact from "../../Component/Notifications/Interact";
import { Loading } from "../Loading";
import { Error } from "../Error";
import { NotificationStyled, Header, LeftGroup, RightGroup, Create } from "./Notification.styled";
import useFetchNotification from "../../Hooks/Notification/useFetchNotifications";
import { useSortNotifications } from "../../Hooks/Notification/useSortNotification";
import useNotificationStore from "../../Context";

const Notification = () => {
  const { isDisplayInteract, displayInteract, setInteractType, interactType, createInteract, sortMethod, setSortMethod } = useNotificationStore();
  const { notifications, loading, error } = useFetchNotification();
  const [sortedNotifications, setSortedNotifications] = useState([]);

  useEffect(() => {
    const sorted = useSortNotifications(notifications, sortMethod);
    setSortedNotifications(sorted);
  }, [notifications, sortMethod]);

  const handleCreateClick = () => {
    createInteract();
    setInteractType("Create");
    displayInteract();
  };

  const handleSelectChange = (e) => {
    setSortMethod(e.target.value);
  };

  if (error) return <Error error={error}></Error>
  if (loading) return <Loading></Loading>;

  return (
    <NotificationStyled>
      <Header>
        <LeftGroup>
          <p>Notification by</p>
          <select value={sortMethod} onChange={handleSelectChange}>
            <option value="newest_to_oldest">newest to oldest</option>
            <option value="oldest_to_newest">oldest to newest</option>
            <option value="label_asc">label (A &gt; Z)</option>
            <option value="label_desc">label (Z &gt; A)</option>
            <option value="sender_asc">sender (A &gt; Z)</option>
            <option value="sender_desc">sender (Z &gt; A)</option>
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
        sortedNotifications.map((value, index) => (
          <NotificationBlock key={index} data={value} />
        ))
      )}
    </NotificationStyled>
  );
};

export default Notification;
