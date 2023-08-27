import React, { useRef, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import FullButton from '../buttons/FullButton';
import { baseURL } from '../../environments'


function RoomUpdate(props) {
    
    const { id } = useParams();
    
    // const titleRef = useRef();
    // const descriptionRef = useRef();


    const url = `${baseURL}/room/${id}`;

    let originalText = ''

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');

    const navigate = useNavigate();


    const fetchRoom = async () => {
      
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: new Headers({
            "Authorization": props.token
          })
        });

        const data = await res.json();

        console.log(data);
        const text = data.getMessage;
        originalText = text
        setDescription()
    

      } catch (err) {
        console.error(err.message)
      }

    }
    async function handleSubmit(e) {
        e.preventDefault();

        // const title = titleRef.current.value;
        // console.log(titleRef.current.value);

        // const description = descriptionRef.current.value;
        // console.log(descriptionRef.current.value);

        // console.log(title)
        let body = JSON.stringify({
            title: title,
            description: description

        })
        const requestOptions = {
          headers: new Headers({
            "Authorization": props.token,
            "Content-Type": 'application/json'
          }),
          body: body,
          method: "PATCH"
        }

        try {
          const res = await fetch(url, requestOptions);
          const data = await res.json();

          console.log(data);


        } catch (err) {
          console.error(err);
        }
    }


    useEffect(() => {
      if(props.token) {
        fetchRoom();
      }

    }, [props.token])

    return (
        <>
            <h1
                style={{textAlign: 'center', textDecoration: 'underline'}}
            >Edit Message</h1>
            <Container>
                <Row>
                    <Col md='4'>
                        <p>
                            <b>{originalText}</b>
                            <br />
                            When you're happy with your new message, press the button to change.
                            </p>
                          <FullButton>
                            <Button
                            color='info'
                            outline
                            onClick={() => navigate('/room')
                            // fetchMessages();
                            //     fetchRooms();
                            }>Back to Room</Button>
                          </FullButton>
                    </Col>
                    <Col md='8'>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>Room Title</Label>
                                <Input 
                            
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Room Description</Label>
                                <Input 
                            
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                />
                            </FormGroup>
                           
                            <FullButton>
                                <Button color='success'>Change</Button>
                            </FullButton>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RoomUpdate