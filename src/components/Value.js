import PropTypes from 'prop-types'

const Value = ({ text, detail }) => {
    return (
            <>{text}</>
    )
}

Value.propTypes = {
    text: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
}

export default Value
