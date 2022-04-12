import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory, useNavigate } from 'react-router-dom'

function SearchBox() {

    const [keyword, setKeyword] = useState('')

    // let history = useHistory()

    let navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword) {
            navigate(`/?keyword=${keyword}&page=1`)
        } else {
            navigate(``)
        }
}

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
        <Form.Control 
            type='search' 
            placeholder='Search'
            name='q' 
            onChange={(e) => setKeyword(e.target.value)} 
            className='mr-sm-2 ml-sm-5 me-2'
        >
        </Form.Control>

        <Button type='submit' variant='outline-secondary' style={{ borderRadius: 5 }}>Submit</Button>
    </Form>
  )
}

export default SearchBox
