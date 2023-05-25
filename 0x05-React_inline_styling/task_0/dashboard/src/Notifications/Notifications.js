import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';

class Notifications extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;

        return (
            <div className="notifications-container">
                <div className="menuItem">
                    Your notifications
                </div>
                {displayDrawer && (
                    <div className="Notifications">
                        {listNotifications.length === 0 ? (
                            <p>No new notification for now</p>
                        ) : (
                            <ul>
                                {listNotifications.map((notification) => (
                                    <NotificationItem
                                        key={notification.id}
                                        type={notification.type}
                                        value={notification.value}
                                        html={notification.html}
                                        markAsRead={this.markNotificationAsRead}
                                        id={notification.id}
                                    />
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool.isRequired,
    listNotifications: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            value: PropTypes.string,
            html: PropTypes.bool,
        }),
    ).isRequired,
};

export default Notifications;
