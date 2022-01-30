import PropTypes from 'prop-types'
import { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

const MonActions = ({mon, onBattle, onEvolve, onDelete}) => {
    const [opponent, setOpponent] = useState('')
    const [evolution, setEvolution] = useState('')

    const onBattleSubmit = (e) => {
        e.preventDefault()
        if (!opponent) {
            alert('please add opponent')
            return
        }
        onBattle(mon, opponent)
        setOpponent('')
    }

    const onEvolveSubmit = (e) => {
        e.preventDefault()
        if (!evolution) {
            alert('please select evolution')
            return
        }
        onEvolve(mon, evolution)
    }

    return (
            <Container>

            <Row className='p-1 m-1 border-bottom'>
            <Form onSubmit={onBattleSubmit}>
            <Form.Group className='mb-3'>
            <Form.Label>Opponent</Form.Label>
            <Form.Control type='text' placeholder='Zigzagoon' value={opponent} onChange={(e) => setOpponent(e.target.value)} />
            </Form.Group>
            <Button variant="secondary" type="submit">Battle</Button>
            </Form>
            </Row>

        {mon.evolutions.length !== 0 ?
                <Row className='p-1 m-1 border-bottom'>
                <Form onSubmit={onEvolveSubmit}>
         {mon.evolutions.map((evolutionOption,index) =>
             (<Form.Check
              key={index}
              label={<img src={evolutionOption.imgSrc} alt={evolutionOption.family} />}
              value={evolutionOption.family}
              checked={evolutionOption.family === evolution}
              type='radio'
              onChange={e => setEvolution(e.currentTarget.value)} />))}
                        
                <Button variant="secondary" type="submit">Evolve</Button>
                </Form>
                </Row>
         : <></>}

            <Row className='p-1 m-1'>
            <Button variant="danger" type="submit" onClick={() => onDelete(mon)}>Delete</Button>
            </Row>

        </Container>
  )
}

MonActions.propTypes = {
    mon: PropTypes.object.isRequired,
    onBattle: PropTypes.func.isRequired,
    onEvolve: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default MonActions
