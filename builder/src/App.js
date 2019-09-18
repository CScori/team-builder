import React, { useState } from 'react';
import Members from './CMPNT/Members';
import NewForm from './CMPNT/NewForm';

function App() {


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
    <div className="App">
      <Members members={members}/>
      <NewForm addNewMember={addNewMember}/>
    </div>
  
  );
}

export default App;
