import React, { useState } from 'react'

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
        props.ddNewMember(mem)
        setMem({name: '', email: '', role: ''})
    }

    return (
        <form onSubmit={submit}>
            <label htmlFor='person'>Name</label>
            <input
                id='person'
                type='text'
                name='name'
                value={mem.name}
                onChange={handler}
            />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='email'
                name='email'
                value={mem.email}
                onChange={handler}
            />
              <label htmlFor='role'>Role</label>
            <input
                id='role'
                type='text'
                name='role'
                value={mem.role}
                onChange={handler}
            />
            <button type='submit'>Add Member</button>

      </form>
                    )
                }
                
                export default NewForm
