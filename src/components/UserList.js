import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';

/**
 * url = current endpoint
 */
export const url = 'https://jsonplaceholder.typicode.com/users';

const UserList = ({ data }) => {
    /**
     * setup hooks 
     */
    const [person, setPeople] = useState([]);

    /**
     * axios to GET users from mock api
     * url = current endpoint
     */
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(url);
            setPeople(result.data);
          };
          fetchData();
    }, []);
        
    return(
        <Container>
            <Row>
            {person.map(item => (
                <Col className="m-2 p-3" xs={6} md={6} >
                    <Card key={item.name}>
                        <Card.Body>{item.name}</Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>
    );
}
export default UserList;