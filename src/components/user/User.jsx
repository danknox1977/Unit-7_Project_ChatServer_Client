import React from 'react'


export default function User(props) {
    let currentUsername = ''

        const getUser = async () => {
     
        const url = `${baseURL}/user/info/${email}`

            try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        },
      
    });

      const data = await res.json();

      currentUsername = data.username;

    } catch (err) {
      console.error(err.message)
    }
}


  return (
    <>
    <h3>You are iChatting as ${currentUsername}</h3>
    </>
  )
}
