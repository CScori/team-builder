import React, { useState } from 'react'
import styled from 'styled-components'

const Bar = styled.div`
background: darkgrey;
opacity: 0.8;
color: white;
border-radius: 25px;
width: 20%;
padding: 10px;
margin: 16px auto;
text-align: center;
display: flex;
justify-content: space-evenly;
`

const NewForm = props => {
    const [mem, setMem] = useState({
        name: '',
        email: '',
        role: ''
    })

    const handler = e => {
        setMem({ ...mem, [e.target.name]: e.target.value });
    }

    const submit = e => {
        e.preventDefault();
        props.addNewMember(mem)
        setMem({name: '', email: '', role: ''})
    }

    return (
        <Bar>
        {/* <form onSubmit={submit} if(!memberEdit)else(newMember)> */}
        <form onsubmit={submit}>
            <div>
            <label htmlFor='person'>Name</label>
            <input
                id='person'
                type='text'
                name='name'
                value={mem.name}
                onChange={handler}
            />
            </div>
            <div>
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='email'
                name='email'
                value={mem.email}
                onChange={handler}
            />
            </div>
            <div>
              <label htmlFor='role'>Role</label>
            <input
                id='role'
                type='text'
                name='role'
                value={mem.role}
                onChange={handler}
            />
            </div>
            <button type='submit'>Add Member</button>

      </form>
      </Bar>
                    )
                }
                
                export default NewForm
