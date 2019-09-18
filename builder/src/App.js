import React, { useState } from 'react';
import Members from './CMPNT/Members';
import NewForm from './CMPNT/NewForm';
import styled from 'styled-components'

const Hold = styled.div`
background: black;
height: 1000px;
padding-top: 20px;

`

function App() {
  const [memberEdit, SetMemberEdit] = useState({name: '',
  email: '',
  role: ''})

  const editor = memberEdit => {
    const edi = {

    }
    setMemberEdit([...members, memberEdit])
  }

  const [members, setMembers] = useState([
    //members will be passed as props in member.js
    //setmember used in the new mwmber --> 
    // this sets the first member to add from
    {
      id: 1,
      name: 'Cori',
      email: 'lambdacori@lambda.edu',
      role: 'student'
    }
  ])

  const addNewMember = member => {
    //member is a prop for function
    //new member is the kvp for the newform.js
    const newMember ={
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember])
    //members is being spread to new member
    //newmember  wiil be created in newform
  }

  return (
    <Hold className="App">
      <Members members={members} memberEdit={memberEdit}/>
      <NewForm addNewMember={addNewMember}/>
    </Hold>
  
  );
}

export default App;
