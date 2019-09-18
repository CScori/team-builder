import React from 'react'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import styled from 'styled-components'

const Hold = styled.div`
background: 134b66;
opacity: 0.8;
color: e8dbd6;
border-radius: 0 25px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
width: 100%;
max-width: 250px;
padding: 10px;
margin: 16px auto;
text-align: center;
`


const Members = props => {

    return (
        <Hold>
        <Row>{props.members.map(member => (
        <Col sm="6" key={member.id}>
          <Card body>
            <CardTitle>{member.name}</CardTitle>
            <CardText>{member.email}</CardText>
            <CardText>{member.role}</CardText>
          </Card>
        </Col>
            ))}
        </Row>
        </Hold>
    )
}

export default Members
