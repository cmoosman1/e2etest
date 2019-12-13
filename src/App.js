import React, { useState } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import GetCoinsForm from './components/GetCoinsForm';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const url = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [person, setPeople] = useState([]);
  const handleSend = newMessage => {
    setMessages(newMessage);
  };

  axios.get(url)
    .then(res => {
      const persons = res.data;
      setPeople(persons);
    });

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h2>Coin calculation:</h2>
          <GetCoinsForm onSend={handleSend}/>
          <UserList data={messages} />
        </Col>
      </Row>
      <Row>
          <h2>Basic API call:</h2>
      </Row>
      <Row>
          { person.map(person => 
            <Col xs={6} md={4}>
              <Card body>{person.name}</Card>
            </Col>
          )}
      </Row>
    </Container>
  );
};

export default App;