import React, { useRef } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import FullButton from '../../buttons/FullButton';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../../environments'

function Signup(props) {


    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
       
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
      

        let body = JSON.stringify({
            username: username,
            email: email,
            password: password
        })


        const url = `${baseURL}/user/signup`;

        try {

            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: body

            });
            
            
            
            const data = await res.json();
         
            if(data.message === "Success!") {
                props.updateToken(data.token)
                navigate('/room');
            } else {
                alert(data.message)
            }

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <h2>Signup</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup floating>
                    <Input
                        id='usernameSignup'
                        innerRef={usernameRef}
                        placeholder='your username here'
                        name='username'
                        type='text'

                    />
                    <Label for='usernameSignup'>Username</Label>
                </FormGroup>
                <FormGroup>
                    <Label>email</Label>
                    <Input
                        innerRef={emailRef}
                        type='email'
                        placeholder='you@email.com'
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        innerRef={passwordRef}
                        type='password'
                    />
                </FormGroup>
                <FullButton>
                    <Button type='submit'>Signup</Button>
                </FullButton>
            </Form>
        </>
    )
}

export default Signup