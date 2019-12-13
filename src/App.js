import React, { useState } from 'react';

import UserList from './components/UserList';
import GetCoinsForm from './components/GetCoinsForm';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  /**
   * setup hooks 
   */
  const [messages, setMessages] = useState([]);
  
  /**
   * 
   * @param {*} newMessage 
   * setMessages(newMessage) updates state from child compnent
   */
  const handleSend = newMessage => {
    setMessages(newMessage);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <h4>Coin calculation:</h4>
          <GetCoinsForm onSend={handleSend} data={messages}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Current users:</h4>
          <UserList />
        </Col>
      </Row>
    </Container>
  );
};

export default App;