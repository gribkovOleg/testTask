import React, { useContext } from 'react'
import { DataContext } from './Employees'

export default function ListEmployees() {

    const data = useContext(DataContext)

    const handleClick = ({ target }) => {
        target.parentNode.remove()
    }

    return (
        <ul className='list'>
            {data.map((item, i) => {
                return <li key={(item.id) ? item.id : i + 1}>
                            {item.first_name}
                            <button 
                            className='button'
                            onClick={handleClick}>x</button>
                    </li>
            })}
        </ul>
    )
}