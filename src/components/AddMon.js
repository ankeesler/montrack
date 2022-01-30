import { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AddMon = ({ onAdd }) => {
      const [name, setName] = useState('')
  const [family, setFamily] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name || !family) {
            alert('please add name and family')
            return
        }
        onAdd({name, family})

        setName('')
        setFamily('')
    }

  return (
          <Form className='p-3 border border-primary rounded' onSubmit={onSubmit}>

          <Form.Group className='mb-3'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Charboi' value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className='mb-3'>
          <Form.Label>Family</Form.Label>
          <Form.Control type='text' placeholder='Charizard' value={family} onChange={(e) => setFamily(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit">Add Mon</Button>

          </Form>
  )
}

export default AddMon
