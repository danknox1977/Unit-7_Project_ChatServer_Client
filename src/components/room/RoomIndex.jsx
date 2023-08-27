import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import RoomTable from "./RoomTable";
import RoomCreate from "./RoomCreate";
import { baseURL } from "../../environments";

function RoomIndex(props) {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState([]);

  const fetchRooms = async () => {
    const url = `${baseURL}/room`;

    const requestOption = {
      method: "GET",
      headers: new Headers({
        Authorization: props.token,
      }),
    };

    try {
      const res = await fetch(url, requestOption);
      const data = await res.json();
      setRooms(data.getAllRooms);     
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if(props.token)
    fetchRooms();
  }, [props.token]);

  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <RoomTable
              rooms={rooms}
              token={props.token}
              fetchRooms={fetchRooms}
              selectedRoom={selectedRoom}
              setSelectedRoom={setSelectedRoom}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <RoomCreate token={props.token} fetchRooms={fetchRooms} />
          </Col>
        </Row>
        <br />
      </Container>
    </>
  );
}

export default RoomIndex;
