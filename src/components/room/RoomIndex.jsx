import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import RoomTable from './RoomTable';
import { baseURL} from '../../environments'
import MessageIndex from '../messages/MessageIndex';
import MessageAdd from '../messages/MessageAdd';
import { useNavigate } from 'react-router-dom';




function RoomIndex(props) {
    let currentRoom_Id = '64ea30f18a162f7aa6449965'
    console.log('props to RoomIndex: ', props)
    const [ messages, setMessages ] = useState([]);
    const [tokenPresent, setTokenPresent] = useState(false);

    const navigate = useNavigate();



    const fetchMessages = async () => {
        console.log('hit')
        const url = `${baseURL}/message/${currentRoom_Id}`;
  
        const requestOption = {
            method: 'GET',
            headers: new Headers({
                "Authorization": props.token
            })
        }
  
        try {
            
            const res = await fetch(url, requestOption);
            const data = await res.json();
  
            console.log(data)
            setMessages(data)
            console.log(messages)
           
          
           
  
        } catch (err) {
            console.error(err.message)
        }
    }
    // useEffect(() => {
    //     console.log('Messages updated:', messages);
    // }, [messages]);

  
    useEffect(() => {
        if (props.token) {
            setTokenPresent(true);
        }
    }, [props.token]);

    console.log('RoomIndex tokenPresent: ', tokenPresent)

   


    useEffect(() => {
        if(tokenPresent) {
          console.log('Room Index Inside useEffect if')
            fetchMessages()
            // getUser()
           
        }
       
    }, [tokenPresent])

    return (
        <>  

            <Container>

                <Row>
                    <Col>
                        {/* <h2>ADD A ROOM Placeholder</h2> */}
                        <RoomTable />
                    </Col>
                {/* </Row>

                <Row> */}
                
               <Col>
                        <MessageIndex
                            token={props.token}
                            fetchMessages={fetchMessages}
                            messages={messages}
                        />
                        <MessageAdd 
                        // username={currentUsername}
                        fetchMessages={fetchMessages}
                        room_Id={currentRoom_Id}
                        // owner_Id={}
                        token={props.token}
                          />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default RoomIndex