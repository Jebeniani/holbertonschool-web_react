import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './NotificationItem.css';

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    return (
      <li
        className={type === 'urgent' ? 'urgent' : null}
        data-notification-type={type}
        dangerouslySetInnerHTML={html ? { __html: value } : null}
        onClick={() => markAsRead(id)}
      >
        {html ? null : value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.bool,
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
  value: '',
  html: false,
};

export default NotificationItem;