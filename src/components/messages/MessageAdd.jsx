import React, { useRef } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import FullButton from '../buttons/FullButton';
import { baseURL } from '../../environments';

function MessageAdd(props) {
    console.log(props)
    const dateRef = useRef();
    const ownerIdRef = useRef();
    const roomIdRef = useRef();
    const textRef = useRef();
    const userNameRef = useRef();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const date = new Date
        const ownerId = props.ownerId;
        const roomId = props.roomId;
        const text = textRef.current.value;
        const userName = props.userName;

        let body = JSON.stringify({
            date, ownerId, roomId, text, userName
        })

        let url = `${baseURL}/message/${props.roomId}`;

        let headers = new Headers();
        headers.append(`Content-Type`, `application/json`);
        headers.append('Authorization', props.token)

        const requestOption = {
            headers: headers,
            body: body,
            method: 'POST'
        }

        try {
            const res = await fetch(url, requestOption);
            const data = await res.json();

            // console.log(data);
            props.fetchMessages();
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            {/* <h3>New Message</h3> */}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    {/* <Label></Label> */}
                    <Input 
                        name='text'
                        innerRef={textRef}
                        placeholder='Type New Message Here'
                    />
                </FormGroup>
                <FullButton>
                    <Button color='success'>Add Message</Button>
                </FullButton>
            </Form>
        </>
    )
}

export default MessageAdd