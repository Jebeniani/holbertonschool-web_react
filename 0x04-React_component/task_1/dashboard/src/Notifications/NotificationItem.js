import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem(props) {
    if (!props.html) {
        return (<li data-priority={props.type}>{props.value}</li>);
    } else {
        return (<li data-priority={props.type}
            dangerouslySetInnerHTML={{ __html: props.html }}></li>
        );
    }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
