import React from 'react'
import { Table, Button } from 'reactstrap'
import {baseURL} from '../../environments'
import { useNavigate } from 'react-router-dom'



export default function MessageDisplay(props) {
  console.log('props.messages :', props.messages);
  let messagesToMap = []
  messagesToMap = props.messages
  console.log(messagesToMap)
    const navigate = useNavigate();

    async function deleteMessage(id) {
        const url = `${baseURL}/message/${id}`

        let requestOption = {
            headers: new Headers({
                'Authorization': props.token
              
            }),
            method: 'DELETE'
        }
        try {
            let res = await fetch(url, requestOption);
            let data = await res.json();

           if(data){
            props.fetchMessages()
           }


        } catch (err) {
            console.err(err.message)
        }
    }

    
  return (
     // Date Text Owner
    <>
    <h2>Message</h2>
    <Table hover borderless dark>
  <thead>
    <tr>
      <th>
        Date
      </th>
      <th>
        Text
      </th>
      <th>
        Owner
      </th>
      <th>
        Edit / Delete
      </th>
    </tr>
  </thead>
  <tbody>
  {/* {

  
  props.messages.map(message => {
    return(
        <tr key={message._id}>
            <th scope="row">{message.date}</th>
            <td>{message.text}</td>
            <td>{message.ownerId}</td>
            <td>
              <Button 
              color='warning'
              onClick={() => navigate(`/message/update/${props.messages[0]._id}`)}>Edit
                
                
                </Button>
                <Button
            onClick={() => deleteMessage(props.messages[0]._id)}
            color='danger'
            >Delete</Button>
            </td>
        </tr>
    )
        
    

 })
} */}
  </tbody>
</Table>
</>
  )
}
