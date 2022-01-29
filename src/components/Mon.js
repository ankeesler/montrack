import PropTypes from 'prop-types'

const Mon = ({ mon }) => {
    return (
        <div>
            <h3>{mon.name}</h3>
            <img src={mon.imgSrc} alt={mon.name} />
            </div>
  )
}

Mon.propTypes = {
    mon: PropTypes.object.isRequired,
}

export default Mon
