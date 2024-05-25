import React from "react";
import NotificationBlock from "../Component/NotificationBlock";
import styled from "styled-components";

const Notification = () => {
  return (
    <NotificationStyled>
      <Header>
        <LeftGroup>
          <p>Notification by</p>
          <select>
            <option selected="selected">newest to oldest</option>
            <option>oldest to newest</option>
            <option>label</option>
            <option>sender</option>
          </select>
        </LeftGroup>
        <RightGroup>
          <input placeholder="Find something ..."></input>
        </RightGroup>
      </Header>
      <NotificationBlock />
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

const LeftGroup = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    p{
      display: flex;
      justify-content: start;
      align-items: center;
      color: white;
      font-weight: bold;
      font-size: 3em;
      margin: 0;
  }
  select{
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
    &:hover{
      cursor: pointer;
    }
  }
`

const RightGroup = styled.div`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  input{
    height: 60%;
    width: 100%;
    font-size: 2em;
    padding-left: 3%;
    border-radius: 20px;
    outline: none;
    font-weight: bold;
  }
`

const Content = styled.div`
  
`