import styled from "styled-components";
import Flatpickr from "react-flatpickr";
import { useRef, useState } from "react";
import { Checkbox, Input, Button, Table, Tag } from "antd";

const Meeting = () => {
    return ( 
        <Container>
            <Title>Meeting room</Title>
            <Content>
                <ActionContainer/>
                <ResultContainer/>
            </Content>
        </Container>
     );
}

const ActionContainer = () => {

    const fp = useRef(null);

    const handleChooseDate = (date) => {
        console.log(date[0])
      }

    return (
        <Action>
            <div className="calendar">
                <div className="action-title">Select Date</div>
                <div className="flat-picker-wrapper">
                <Flatpickr
                    ref={fp}
                    options={{
                        mode: "single",
                        inline: true
                    }}
                    value={new Date()}
                    onChange={handleChooseDate}
                    />
                </div>
            </div>


        </Action>
    )
}
const ResultContainer = () => {

    const [dataSource, setDataSource] = useState([])
    // const getStatusStyle = (status) => {
    //     switch(status){
    //         case 'paid': 
    //         return "green"
    //         case 'deposit': 
    //         return "red"
    //         case 'pending': 
    //         return "#868606"

    //     }
    // }

    const columns = [
        {
          title: 'Time',
          dataIndex: 'time',
          key: 'time',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        //   render: (_, { status }) => {
        //     let color = getStatusStyle(status)
    
        //     return (
        //       <Tag color={color} key={status}>
        //           {status.toUpperCase()}
        //       </Tag>
        //     )
        //   }
        },
      ];



    return (
        <Result>
            <Table dataSource={dataSource} columns={columns} />
        </Result>
    )
}


const Container = styled.div`

`

const Title = styled.h1`
    color: white;
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 20px;
`

const Content = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
`


// Action container
const Action = styled.div `
    max-width: 400px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    height: fit-content;
    .calendar {

        .action-title {
            font-size: 2rem;
            font-weight: 700;
        }
        margin-bottom: 20px;
        .flat-picker-wrapper {
            input.flatpickr-input {
                display: none!important;
            }
        }
    }
`


// Result container
const Result = styled.div `
    flex: 1;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
`
export default Meeting;
