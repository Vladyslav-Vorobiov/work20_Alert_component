import React from 'react'
import cn from 'classnames';

class Alert extends React.Component {
    render() {
        const {type, text} = this.props
        const alertType = type
        const possibleAlertTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
        let componentClass = null

        possibleAlertTypes.includes(alertType) ? componentClass = cn('alert', `alert-${alertType}`) : componentClass = cn('alert alert-warning')

        return (
            <div className={componentClass} role="alert">{text}</div>
        )
    }
}

Alert.defaultProps = {
    text: 'Welcome! - from defaultProps',
    type: 'danger'
}

export default Alert