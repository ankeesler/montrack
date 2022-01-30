import PropTypes from 'prop-types'

import Mon from './Mon'

const Mons = ({ mons, onBattle, onEvolve, onDelete }) => {
    return (
        <>
            {mons.map((mon, index) => (<Mon key={index} mon={mon} onBattle={onBattle} onEvolve={onEvolve} onDelete={onDelete} />))}
        </>
  )
}

Mons.propTypes = {
    mons: PropTypes.array.isRequired,
    onBattle: PropTypes.func.isRequired,
    onEvolve: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default Mons
