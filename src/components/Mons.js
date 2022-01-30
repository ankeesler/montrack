import PropTypes from 'prop-types'

import Mon from './Mon'

const Mons = ({ mons }) => {
    return (
        <>
            {mons.map((mon, index) => (<Mon key={index} mon={mon} />))}
        </>
  )
}

Mons.propTypes = {
    mons: PropTypes.array.isRequired,
}

export default Mons
