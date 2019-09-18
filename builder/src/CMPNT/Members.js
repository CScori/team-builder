import React from 'react'
import styled from 'styled-components'




const Members = props => {

    return (
        <div>
            {props.members.map(member => (
                <div>
                    <h3>{member.name]</h3>
                    <h4>{member.email]</h4>
                    <h4>{member.role]</h4>
                </div>
            ))}
        </div>
    )
}

export default Members
