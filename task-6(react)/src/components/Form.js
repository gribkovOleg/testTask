import React, { useContext, useState } from 'react'
import ListEmployees from './ListEmployees'
import { DataContext } from './Employees'


export default function Form() {
    const data = useContext(DataContext)
    const [valueInput, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        data.push({
            first_name: valueInput
        })
        setInput('')
    }
    
    const hadleChange = (e) => {
        setInput(e.target.value)
    }
 
    return (
        <div className="container_form">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                 placeholder="add employee" 
                 value={valueInput} 
                 onChange={hadleChange} />
            </form>
            <ListEmployees />
        </div>
    )
}