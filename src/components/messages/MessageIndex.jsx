import React, { useEffect, useState } from 'react'
import MessageDisplay from './MessageDisplay'
import { baseURL } from '../../environments'


function MessageIndex(props) {

 
  console.log(props.messages)
  
  
  
  // const userFetch = async () => {
  //   const url = `${baseURL}/user/{currentUserId}`

  //   try {
  //     const res = await fetch(url, {
  //       method: "GET",
  //       headers: new Headers({
  //         "Authorization": props.token
  //       })
  //     });

  //     const data = await res.json();

  //     console.log(data);

  //   } catch (err) {
  //     console.error(err.message)
  //   }

    

    


  // }
  // const fetchMessages = async () => {
  //     const url = `${baseURL}/message/64c6d0c513dc26991bc0e242`;

  //     const requestOption = {
  //         method: 'GET',
  //         headers: new Headers({
  //             "Authorization": props.token
  //         })
  //     }

  //     try {
          
  //         const res = await fetch(url, requestOption);
  //         const data = await res.json();

          
  //         setMessages(data)
  //         console.log(data.getAllMessages)
   
        
         

  //     } catch (err) {
  //         console.error(err.message)
  //     }
  // }

  // useEffect(() => {
  //     if(props.token) {
  //       console.log('Inside use Effect if')
  //         fetchMessages()
  //         // userFetch()
  //     }
  // }, [props.token])

  return (
    <>
    <MessageDisplay 
    token={props.token}
    // fetchMessages={fetchMessages}
    // userFetch={userFetch}
    messages={props.messages}
    />
    </>
  )
}

export default MessageIndex

