import React, { useState } from 'react' 
import './IdentificationInput.scss'

const IdentificationInput = () => {
    const [users,setUsers] = useState([]);
    const [input,setInput] = useState('');
    return(
        <form className="block_identification" onSubmit={(e)=>{
            console.log('test')
            let updatedUsers = [...users];
            updatedUsers.push(input);
            setInput('');
            setUsers(updatedUsers);
        }}>
            <div className="user_identification_wrapper">
                {users.map(user => {
                    return (
                        <div className="user_identification_item">
                            <p className="user_identification_item_name">user</p>
                            <p className="user_identification_item_cross">X</p>
                        </div>
                    )
                })}
            </div>
            <input placeholder="Identification" onChange={(e) => {
                setInput(e.currentTarget.value)
                console.log('hero')
            }}/>
        </form>
    )
}

export default IdentificationInput