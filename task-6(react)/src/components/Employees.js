import React, { useState, useEffect } from 'react'
import Form from './Form';

export const DataContext = React.createContext()

export default function Employees() {
    const [data, setData] = useState([])

    async function getEmployees() {
        const stream = await fetch("https://reqres.in/api/users?per_page=12%22")
        const { data } = await stream.json();
        setData(data)
    }

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <DataContext.Provider value={data}>
            <>
              <Form />
            </>
        </DataContext.Provider>
    )
}

