import { useState } from 'react'

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
          <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
          <label>Name</label>
          <input type='text' placeholder='Charboi' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='form-control'>
          <label>Family</label>
          <input type='text' placeholder='Charizard' value={family} onChange={(e) => setFamily(e.target.value)} />
          </div>
          <input type='submit' value='Add Mon' className='btn btn-block' />
          </form>
  )
}

export default AddMon
