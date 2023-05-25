import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem(props) {
  const { html, type, value, markAsRead } = props;

  const handleClick = () => {
    if (markAsRead) {
      markAsRead(props.id);
    }
  };

  if (!html) {
    return (
      <li data-priority={type} onClick={handleClick}>
        {value}
      </li>
    );
  } else {
    return (
      <li
        data-priority={type}
        onClick={handleClick}
        dangerouslySetInnerHTML={{ __html: html.__html }}
      ></li>
    );
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func,
  id: PropTypes.number
};
