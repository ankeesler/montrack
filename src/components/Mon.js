import { useState } from 'react'
import PropTypes from 'prop-types'

import Container from 'react-bootstrap/Container'

import MonInfo from './MonInfo'
import MonActions from './MonActions'

const Mon = ({ mon, onBattle, onEvolve, onDelete }) => {
    const [showActions, setShowActions] = useState(false)
    const [background, setBackground] = useState('bg-white')
    return (
        <Container className='m-2 p-2'>

            <Container
        className={`border border-secondary border-2 rounded ${background}`}
        style={{ cursor: 'pointer' }}
        onClick={() => setShowActions(!showActions)}
        onMouseEnter={() => setBackground('bg-info')}
        onMouseLeave={() => setBackground('bg-white')}
            >
            <MonInfo mon={mon} />
            </Container>

            {showActions
             ?
            <Container className='border border-info border-2 rounded' >
             <MonActions mon={mon} onBattle={onBattle} onEvolve={onEvolve} onDelete={onDelete}/>
            </Container>
             : <></>}

        </Container>
    )
}

Mon.propTypes = {
    mon: PropTypes.object.isRequired,
    onBattle: PropTypes.func.isRequired,
    onEvolve: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Mon
