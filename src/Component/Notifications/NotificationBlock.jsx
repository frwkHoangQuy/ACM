import React from "react";
import styled from "styled-components";
import { format } from 'date-fns';

const NotificationBlock = ({ data }) => {
  const { id, time, sender, notification, type } = data
  const formatTime = format(time, 'dd/MM/yyyy HH:mm')
  const [dayDate, dayTime] = formatTime.split(' ');

  return (
    <BlockStyled>
      <DayTime>At: {dayTime}</DayTime>
      <Status> [{type}]</Status>
      <Sender>From : {sender}</Sender>
      <DayDate>Date: {dayDate}</DayDate>
      <Content>Title: {notification}</Content>
      <ButtonBlock>
        <p className="Read">Read</p>
        <p className="Edit">Edit</p>
        <p className="Delete">Delete</p>
      </ButtonBlock>
    </BlockStyled>
  )
}

export default NotificationBlock;

const BlockStyled = styled.div`
  padding: 0 1%;
  background-color: white;
  width: 100%;
  height: 10vh;
  margin-top: 2%;
  border-radius: 20px;
  display: flex;
  font-weight: bold;
  gap: 1%;

  & > * {
    font-size: 22px;
    margin: 0;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;

const DayDate = styled.div`
  width: 12%;
  color: black;
`;

const DayTime = styled.div`
  width: 6%;
  color: black;
`;

const Status = styled.div`
  width: 9%;
  color: red;
`;

const Sender = styled.div`
  width: 15%;
  color: black;
`;

const Content = styled.div`
  color: black;
  margin: 0;
  flex-grow: 1;
  width: 42%;
`;

const ButtonBlock = styled.div`
  min-width: 12%;
  display: flex;

  p {
    font-size: 22px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    &:hover {
      cursor: pointer;
      transition: all 0.3s ease;
      color: black;
    }
  }

  .Delete {
    color: red;
  }
`;
