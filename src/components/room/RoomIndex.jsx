import React, { useEffect, useState } from 'react'
// import MovieCreate from './MovieCreate';
import { Col, Container, Row } from 'reactstrap';
import RoomTable from './RoomTable';
import { baseURL} from '../../environments'
import MessageIndex from '../messages/MessageIndex';
import MessageAdd from '../messages/MessageAdd';

console.log(baseURL);


function RoomIndex(props) {
    console.log(props)
    const [ messages, setMessages ] = useState([]);


    const fetchMessages = async () => {
        const url = `${baseURL}/message/64c6d0c513dc26991bc0e242`;
  
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
  
    useEffect(() => {
        if(props.token) {
          console.log('Inside useEffect if')
            fetchMessages()
           
        }
    }, [props.token])

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
                            // fetchMessages={fetchMessages}
                            messages={messages}
                        />
                        <MessageAdd 
                        //Add userName
                        //Add roomId
                        //Add ownerId
                          token={props.token}
                          />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default RoomIndex