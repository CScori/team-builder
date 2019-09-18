import React, { useEffect }from 'react'
import { Card, CardTitle, CardText, Row, Col, Button } from 'reactstrap';
import styled from 'styled-components'

const Hold = styled.div`
background: darkblue;
opacity: 0.8;
color: white;
border-radius: 0 25px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
width: 100%;
max-width: 250px;
padding: 10px;
margin: 16px auto;
text-align: center;
`


const Members = props => {

    // useEffect(props => {
    //     props.memberEdit = props.member
    // })

    return (
        <Hold>
        <Row>{props.members.map(member => (
        <Col sm="6" key={member.id}>
          <Card body>
            <CardTitle>Name: {member.name}</CardTitle>
            <CardText>Email: {member.email}</CardText>
            <CardText>Role: {member.role}</CardText>
            <Button>Edit</Button>
          </Card>
        </Col>
            ))}
        </Row>
        </Hold>
    )
}

export default Members
